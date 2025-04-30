// src/lib/auth.server.ts
import { createCookie, redirect } from "react-router";
import jwt from "jsonwebtoken";

export type UserPayload = {
  sub: string;
  name: string;
  email: string;
};

export const sessionCookie = createCookie("session", {
  httpOnly: true,
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60, // 1 hour
});

export const refreshCookie = createCookie("refreshToken", {
  httpOnly: true,
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 30, // 30 days
});

export function decodeJWT(token: string): UserPayload | null {
  try {
    return jwt.decode(token) as UserPayload;
  } catch {
    return null;
  }
}

export async function getSessionCookie(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;

  const cookie = await sessionCookie.parse(cookieHeader);
  if (!cookie) return null;

  return cookie as string;
}

export async function getRefreshToken(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;

  const cookie = await refreshCookie.parse(cookieHeader);
  if (!cookie) return null;

  return cookie as string;
}

export async function getUserFromRequest(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;

  const cookie = await sessionCookie.parse(cookieHeader);
  if (!cookie) return null;

  return decodeJWT(cookie);
}

export async function refreshSession(request: Request) {
  const refreshToken = await getRefreshToken(request);

  if (!refreshToken) {
    throw redirect("/login", {
      headers: {
        "Set-Cookie": `refreshToken=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
      },
    });
  }

  const refreshRes = await fetch(
    `https://securetoken.googleapis.com/v1/token?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    }
  );

  const refreshData = await refreshRes.json();

  if (refreshRes.status !== 200) {
    throw redirect("/login", {
      headers: {
        "Set-Cookie": `refreshToken=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
      },
    });
  }
  const { id_token, refresh_token } = refreshData;

  await sessionCookie.serialize(id_token);

  if (refresh_token) {
    await refreshCookie.serialize(refresh_token);
  }

  return id_token;
}
