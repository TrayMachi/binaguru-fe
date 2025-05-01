import { refreshSession } from "./auth.server";

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
  const idToken = await refreshSession(request);

  if (!idToken) {
    return {
      code: 401,
      success: false,
      message: "Unauthorized",
      error: "Unauthorized",
    };
  }

  const cleanUrl = url.startsWith("/") ? url.substring(1) : url;

  const res = await fetch(`${process.env.API_URL}${cleanUrl}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
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

  const data: ResponseType<T> = await res.json();
  return {
    code: data.code || res.status,
    success: data.success,
    message: "Success",
    data: data.data,
  };
};
