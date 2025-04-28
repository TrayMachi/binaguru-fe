// src/lib/auth.server.ts
import { createCookie } from "react-router";
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
