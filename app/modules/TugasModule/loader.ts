import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth.server";
import { fetcher } from "~/lib/fetch.server";

export interface Assignment {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  module: {
    id: string;
    title: string;
    courseId: string;
  };
  userSubmission?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    contentLink: string;
    attempts: number;
  };
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

  if (!response.success) {
    return {
      message: response.message || "Failed to load assignment",
      success: false,
    };
  }

  return {
    assignment: response.data,
  };
}
