import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth.server";
import { fetcher } from "~/lib/fetch.server";

export interface Evaluasi {
  id: string;
  assignmentId: string;
  userId: string;
  contentMarkdown: string;
  contentLink: string;
  attempts: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Assignment {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  submissionLink: string;
}

export async function EvaluasiLoader({ request, params }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const { id } = params;

  const response = await fetcher<Evaluasi>(`evaluasi/${id}`, request, {
    method: "GET",
  });

  if (response.code === 404) {
    return redirect("/");
  }

  if (!response.success) {
    return {
      message: response.message || "Failed to load evaluasi",
      success: false,
      courseku: { modules: [] },
    };
  }

  const res = await fetcher<Assignment>(`assignments/${response.data?.assignmentId}`, request, {
    method: "GET",
  });

  if (!response.success) {
    return {
      message: response.message || "Failed to load evaluasi",
      success: false,
      courseku: { modules: [] },
    };
  }

  console.log("Assignment response", response);

  return {
    evaluasi: response.data,
    assignment: res.data,
  };
}
