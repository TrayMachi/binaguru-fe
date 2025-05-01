import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth";
import { fetcher } from "~/lib/fetch";

export interface CourseBase {
  id: string;
  title: string;
  description: string;
  level: string;
  language: string;
  courseType: string;
  courseSubject: string;
}

export interface MyCourse extends CourseBase {
  progress: number;
  ownerCons: string[];
}

export interface RecommendedCourse extends CourseBase {
  user: {
    cons: string[];
  };
}

export interface CourseResponse {
  code: number;
  success: boolean;
  message: string;
  courseku: MyCourse[];
  rekomendasi: RecommendedCourse[];
  allcourse: RecommendedCourse[];
}

export async function SearchLoader({ request }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const response = await fetcher<CourseResponse>("courses", request, {
    method: "GET",
  });

  if (!response.success) {
    return {
      message: response.message || "Failed to load courses",
      success: false,
      courseku: [],
      rekomendasi: [],
      allcourse: [],
    };
  }

  return response.data;
}
