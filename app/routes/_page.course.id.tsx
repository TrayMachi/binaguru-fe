import type { LoaderFunctionArgs } from "react-router";
import CourseModule from "~/modules/CourseModule";
import { CourseLoader } from "~/modules/CourseModule/loader";

export default function CoursePage() {
  return <CourseModule />;
}

// export async function loader(args: LoaderFunctionArgs) {
//   return CourseLoader(args);
// }
