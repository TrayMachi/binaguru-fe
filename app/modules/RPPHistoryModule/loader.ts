import { type LoaderFunctionArgs } from "react-router";
import { fetcher } from "~/lib/fetch.server";

export interface RPPHistoryInterface {
  id: string;
  title: string;
  description: string;
  contentMarkdown: string;
  level: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    username: string;
    email: string;
  };
}

export async function RPPHistoryLoader({ request }: LoaderFunctionArgs) {
  const response = await fetcher<RPPHistoryInterface[]>("rpp", request, {
    method: "GET",
  });

  return { data: response.data };
}
