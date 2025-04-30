import { Outlet, redirect, type LoaderFunctionArgs } from "react-router";
import Footer from "~/components/elements/Footer";
import { ThemeProvider } from "~/components/context/theme-provider";
import { Navbar } from "~/components/elements/Navbar";
import { Toaster } from "~/components/ui/toaster";

export default function Index() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="text-black dark:text-white font-space">
        <Navbar />
        <main className="pt-[64.5px] md:pt-[72px] lg:pt-[78px] font-space max-w-[1920px] bg-frame dark:bg-[#1A1A1A] mx-auto min-h-screen overflow-x-hidden flex flex-col">
          <Outlet />
          <Toaster />
        </main>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const mustUnprotectedRoutes = ["/login", "/register"];
  const url = new URL(request.url);

  const { getUserFromRequest, refreshSession } = await import(
    "~/lib/auth.server"
  );

  const decodeJWT = await getUserFromRequest(request);

  if (decodeJWT && mustUnprotectedRoutes.includes(url.pathname)) {
    return redirect("/");
  }

  if (!decodeJWT) {
    const refreshToken = await refreshSession(request);
    if (!refreshToken && !mustUnprotectedRoutes.includes(url.pathname) && url.pathname !== "/") {
      return redirect("/login");
    }
  }

  return {
    user: decodeJWT,
    isLoggedIn: !!decodeJWT,
  };
}
