import {
  Outlet,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router";
import Footer from "~/components/elements/Footer";
import { Navbar } from "~/components/elements/Navbar";
import { Toaster } from "~/components/ui/toaster";

export default function Index() {
  const data: {
    isLoggedIn: boolean;
    token: string;
    ok: boolean;
  } = useLoaderData();
  return (
    <main className="text-black dark:text-white font-space">
      <Navbar />
      <main className="pt-15 font-ubuntu max-w-[1920px] bg-frame dark:bg-[#1A1A1A] mx-auto min-h-screen overflow-x-hidden flex flex-col">
        <Outlet context={data} />
        <Toaster />
        <Footer />
      </main>
    </main>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  return {
    isLoggedIn: true,
    token: "",
    ok: true,
  };
}
