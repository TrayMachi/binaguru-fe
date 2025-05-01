import type { LoaderFunctionArgs } from "react-router";
import SearchModule from "~/modules/SearchModule";
import { SearchLoader } from "~/modules/SearchModule/loader";

export default function SearchPage() {
  return <SearchModule />;
}

export async function loader(args: LoaderFunctionArgs) {
  return SearchLoader(args);
}
