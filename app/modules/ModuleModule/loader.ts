import { redirect, type LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/lib/auth.server";
import { fetcher } from "~/lib/fetch.server";

export interface Module {
  id: string;
  title: string;
  courseId: string;
  contentMarkdown: string;
  assignmentId: string;
  submissionLink: string;
}

export async function ModuleLoader({ request, params }: LoaderFunctionArgs) {
  const user = await getUserFromRequest(request);

  if (!user) {
    return redirect("/login");
  }

  const { id } = params;

  const response = await fetcher<Module>(`modules/${id}`, request, {
    method: "GET",
  });


  if (response.code === 404) {
    return redirect("/");
  }

  if (!response.success) {
    return {
      message: response.message || "Failed to load module",
      success: false,
      courseku: { modules: [] },
    };
  }

  console.log("Module response", response.data);

  return {
    module: response.data,
  };
}
