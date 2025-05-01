import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth";
import { fetcher } from "~/lib/fetch";

export interface UserBase {
  id: string;
  username: string;
  email: string;
  yoe: number;
  pros: string[];
  cons: string[];
  location: string;
  birthDate: string;
  level: string;
}

export interface UserResponse {
  code: number;
  success: boolean;
  message: string;
  user: UserBase;
}

export async function ProfileLoader({ request }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const response = await fetcher<UserResponse>(`user`, request, {
    method: "GET",
  });

  if (!response.success) {
    return {
      message: response.message || "Failed to load course",
      success: false,
      courseku: { modules: [] },
    };
  }

  return {
    user: response.data,
  };
}
