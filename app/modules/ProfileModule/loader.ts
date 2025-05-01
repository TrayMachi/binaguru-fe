import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth.server";
import { fetcher } from "~/lib/fetch.server";

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

export async function ProfileLoader({ request }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const response = await fetcher<UserBase>(`user`, request, {
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
