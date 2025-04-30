import { redirect } from "react-router";
import { getRefreshToken, sessionCookie, refreshCookie } from "./auth.server";

export interface ResponseType<T> {
  code: number;
  success: boolean;
  message: string;
  error?: string; // usually for zod errors
  data?: T;
}

export const fetcher = async <T>(
  url: string,
  request: Request,
  options?: RequestInit
): Promise<ResponseType<T>> => {
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

  const res = await fetch(`${process.env.API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${id_token}`,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    return {
      code: res.status,
      success: false,
      message: errorResponse.message || "An error occurred",
      error: errorResponse.error || "An error occurred",
    };
  }

  const data = await res.json();
  return {
    code: res.status,
    success: true,
    message: "Success",
    data,
  };
};
