import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth.server";
import { fetcher } from "~/lib/fetch.server";

export interface Assignment {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  submissionLink: string;
}

export async function TugasLoader({ request, params }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const { id } = params;

  const response = await fetcher<Assignment>(`assignments/${id}`, request, {
    method: "GET",
  });


  if (response.code === 404) {
    return redirect("/");
  }

  if (!response.success) {
    return {
      message: response.message || "Failed to load assignment",
      success: false,
      courseku: { modules: [] },
    };
  }

  console.log("Assignment response", response);

  return {
    assignment: response.data,
  };
}
