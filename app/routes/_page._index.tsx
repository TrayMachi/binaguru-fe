import type {
  LoaderFunctionArgs,
} from "react-router";
import LandingModule from "~/modules/LandingModule";

export async function loader(args: LoaderFunctionArgs) {
  return null;
}

export default function LandingPage() {
  return <LandingModule />;
}
