import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from 'react-router';
import { CreateCourseModule } from '~/modules/CreateCourseModule';
import { CreateCourseAction } from '~/modules/CreateCourseModule/action';
import { CreateCourseLoader } from '~/modules/CreateCourseModule/loader';

export async function loader(args: LoaderFunctionArgs) {
  return CreateCourseLoader(args);
}

export async function action(args: ActionFunctionArgs) {
  return CreateCourseAction(args);
}

export default function CreateCoursePage() {
  return <CreateCourseModule />;
}
