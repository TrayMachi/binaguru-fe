import type { ClientLoaderFunctionArgs } from "react-router";
import type {
  LoaderFunctionArgs,
} from "react-router";
import LoaderPage from "~/components/elements/Loader";
import LandingModule from "~/modules/LandingModule";
import LandingClientLoader from "~/modules/LandingModule/client-loader";

export async function loader(args: LoaderFunctionArgs) {
  return null;
}

export async function clientLoader(args: ClientLoaderFunctionArgs) {
  return LandingClientLoader(args);
}

clientLoader.hydrate = true;

export function HydrateFallback() {
  return <LoaderPage />;
}

export default function LandingPage() {
  return <LandingModule />;
}
