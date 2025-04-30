import { Link, useLoaderData } from "react-router";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "../../ui/button";
import { Chevron } from "~/components/icons/Chevron";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { AlignJustify, LogOut, User, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { ThemeToggler } from "~/components/ThemeToggler";
import type { loader } from "~/routes/_page";
import { useLogout } from "~/hooks/useLogout";

export const Navbar = () => {
  const data = useLoaderData<typeof loader>();
  const logout = useLogout();

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);

  return (
    <nav className="fixed top-0 p-4 px-5 sm:px-7 md:px-8 lg:px-10 w-full bg-white dark:bg-[#2A2A2A] z-50">
      <div className="flex gap-2 justify-between items-center">
        <Link className="flex items-center gap-4" to="/">
          <div className="relative w-[58.33438491821289px] lg:w-[81.70320892333984px]">
            <img
              src="/LogoBinaGuru.svg"
              alt="text logo"
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex gap-8 lg:gap-13 items-center">
          <ThemeToggler />
          {data?.isLoggedIn ? (
            <div className="flex gap-8 lg:gap-13 items-center">
              <Link
                to="/course"
                className="max-md:hidden text-s7 text-black dark:text-white font-space"
              >
                Modul Pelatihan
              </Link>

              <Link
                to="/tanya-ai"
                className="max-md:hidden text-s7 text-black dark:text-white font-space"
              >
                Tanya AI
              </Link>

              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild className="max-md:hidden">
                  <button className="max-md:hidden group flex gap-3 max-sm:gap-2 py-2 items-center text-black dark:text-white fill-black dark:fill-white group cursor-pointer">
                    <p className="text-s7 text-black dark:text-white max-sm:hidden font-space">
                      {data.user?.name}
                    </p>
                    <Chevron
                      className={`${
                        popoverOpen ? "-rotate-180" : ""
                      } duration-300`}
                      size="w-6 h-6 max-md:w-5 max-md:h-5"
                      fill="fill-black dark:fill-white"
                    />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="z-50 translate-y-6 -translate-x-2 space-y-6">
                  <Link
                    to="/profil"
                    className={cn(
                      "flex flex-row gap-2 w-full text-left duration-300 rounded-xl font-space text-black dark:text-white  text-s7"
                    )}
                  >
                    <User className="w-6 h-6" />
                    Profil Diri
                  </Link>

                  <button
                    // onClick={logout}
                    className="flex flex-row gap-2 text-s7 w-full text-left duration-300 rounded-xl cursor-pointer font-space text-black dark:text-white"
                  >
                    <LogOut className="w-6 h-6" />
                    Log Out
                  </button>
                </PopoverContent>
              </Popover>

              <Drawer direction="right">
                <DrawerTrigger className="md:hidden">
                  <AlignJustify className="w-6 h-6 text-black dark:text-frame" />
                </DrawerTrigger>
                <DrawerContent className="!w-full !max-w-none sm:!max-w-none bg-tosca-050 dark:bg-black">
                  <DrawerHeader className="gap-8 justify-start items-start">
                    <DrawerClose className="self-end text-black dark:text-white">
                      <X />
                    </DrawerClose>

                    <Link
                      to="/"
                      className="text-s7 text-black dark:text-white font-space"
                    >
                      Home
                    </Link>

                    <Link
                      to="/course"
                      className="text-s7 text-black dark:text-white font-space"
                    >
                      Course Pelatihan
                    </Link>

                    <Link
                      to="/tanya-ai"
                      className="text-s7 text-black dark:text-white font-space"
                    >
                      Tanya AI
                    </Link>

                    <Popover open={popoverOpen2} onOpenChange={setPopoverOpen2}>
                      <PopoverTrigger asChild>
                        <button className="relative group flex gap-3 max-sm:gap-2 py-2 items-center text-black dark:text-white fill-black dark:fill-white group cursor-pointer font-space">
                          <p className="text-s7 text-black dark:text-white">
                            {data.user?.name}
                          </p>
                          <Chevron
                            className={`${
                              popoverOpen ? "-rotate-180" : ""
                            } duration-300`}
                            size="w-6 h-6 max-md:w-5 max-md:h-5"
                            fill="fill-black dark:fill-white"
                          />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="z-50 bg-transparent px-0 translate-x-10 -translate-y-2 space-y-8 shadow-none">
                        <Link
                          to="/profil"
                          className={cn(
                            "flex flex-row gap-2 w-full text-left duration-300 rounded-xl font-space text-black dark:text-white text-s7"
                          )}
                        >
                          <User className="w-6 h-6" />
                          Profil Diri
                        </Link>

                        <button
                          onClick={logout}
                          className="flex flex-row gap-2 text-s7 w-full text-left duration-300 rounded-xl cursor-pointer font-space text-black dark:text-white"
                        >
                          <LogOut className="w-6 h-6 text-black dark:text-frame" />
                          Log Out
                        </button>
                      </PopoverContent>
                    </Popover>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
            </div>
          ) : (
            !data?.isLoggedIn && (
              <Link to="/login">
                <Button className="py-2 md:py-3 h-8 md:h-12">Login</Button>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};
