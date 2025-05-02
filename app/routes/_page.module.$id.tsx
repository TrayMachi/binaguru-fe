import type { LoaderFunctionArgs } from "react-router";
import ModuleModule from "~/modules/ModuleModule";
import { ModuleLoader } from "~/modules/ModuleModule/loader";

export default function ModulePage() {
  return <ModuleModule />;
}

export async function loader(args: LoaderFunctionArgs) {
  return ModuleLoader(args);
}
