import { Outlet, type LoaderFunctionArgs } from "react-router";
import Footer from "~/components/elements/Footer";
import { ThemeProvider } from "~/components/context/theme-provider";
import { Navbar } from "~/components/elements/Navbar";
import { Toaster } from "~/components/ui/toaster";

export default function Index() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="text-black dark:text-white font-space">
        <Navbar />
        <main className="pt-20 font-space max-w-[1920px] bg-frame dark:bg-[#1A1A1A] mx-auto min-h-screen overflow-x-hidden flex flex-col">
          <Outlet />
          <Toaster />
        </main>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  return {
    isLoggedIn: true,
    token: "",
    ok: true,
  };
}
