import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import TugasModule from "~/modules/TugasModule";
import { TugasAction } from "~/modules/TugasModule/action";
import { TugasLoader } from "~/modules/TugasModule/loader";

export default function TugasPage() {
  return <TugasModule />;
}

export async function loader(args: LoaderFunctionArgs) {
  return TugasLoader(args);
}

export async function action(args: ActionFunctionArgs) {
  return TugasAction(args);
}