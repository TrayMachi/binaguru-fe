import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth";
import { fetcher } from "~/lib/fetch";

export async function EditProfileLoader({ request }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const response = await fetcher("user", request, {
    method: "GET",
  });

  if (!response.success) {
    return {
      message: response.message || "Failed to load profile",
      success: false,
    };
  }

  return response.data;
}
