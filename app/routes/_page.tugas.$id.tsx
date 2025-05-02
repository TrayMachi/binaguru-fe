import type { LoaderFunctionArgs } from "react-router";
import TugasModule from "~/modules/TugasModule";
import { TugasLoader } from "~/modules/TugasModule/loader";

export default function TugasPage() {
  return <TugasModule />;
}

export async function loader(args: LoaderFunctionArgs) {
  return TugasLoader(args);
}
