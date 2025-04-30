import type { LoaderFunctionArgs } from "react-router";
import ProfileModule from "~/modules/ProfileModule";
import { ProfileLoader } from "~/modules/ProfileModule/loader";

export default function ProfilePage() {
  return <ProfileModule />;
}

export async function loader(args: LoaderFunctionArgs) {
  return ProfileLoader(args);
}
