import type { LoaderFunctionArgs } from "react-router";
import EvaluasiModule from "~/modules/EvaluasiModule";
import { EvaluasiLoader } from "~/modules/EvaluasiModule/loader";

export default function EvaluasiPage() {
  return <EvaluasiModule />;
}

export async function loader(args: LoaderFunctionArgs) {
  return EvaluasiLoader(args);
}
