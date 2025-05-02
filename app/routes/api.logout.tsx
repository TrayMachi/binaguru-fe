import { redirect, type ActionFunctionArgs } from "react-router";
import { sessionCookie, refreshCookie } from "~/lib/auth.server";

export async function action(args: ActionFunctionArgs) {
  const ddestructSession = await sessionCookie.serialize("", { maxAge: 0 });
  const ddestructRefresh = await refreshCookie.serialize("", { maxAge: 0 });
  
  const headers = new Headers();
  headers.append("Set-Cookie", ddestructSession);
  headers.append("Set-Cookie", ddestructRefresh);

  return redirect("/", { headers });
}
