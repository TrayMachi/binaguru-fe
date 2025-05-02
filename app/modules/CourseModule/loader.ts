import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth.server";
import { fetcher } from "~/lib/fetch.server";
import type { ResponseInterface } from "~/lib/utils";

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  language: string;
  courseType: string;
  courseSubject: string;
  progress: number;
  modules?: {
    id: string;
    title: string;
    hasAssignment: boolean;
  }[];
}

export interface Modules {
  submissionLink?: string | undefined;
  id: string;
  title: string;
  assignmentId: string | undefined;
  hasAssignment: boolean;
}[]

export interface CourseResponse {
  courseDetail: {
    course: Course;
    modules: Modules[];
  };
}

export async function CourseLoader({ request, params }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const { id } = params;

  const response = await fetcher<CourseResponse>(`courses/${id}`, request, {
    method: "GET",
  });

  console.log("Course response", response.data?.courseDetail.modules);

  if (!response.success) {
    return {
      message: response.message || "Failed to load course",
      success: false,
      courseku: { modules: [] },
    };
  }

  return {
    course: response.data?.courseDetail,
  };
}
