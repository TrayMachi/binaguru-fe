import { ArrowRight, BookMarked, Filter, Search, X } from "lucide-react";
import { CourseCard } from "~/components/elements/CourseCard";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { getAsset } from "~/lib/getAsset";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { useLoaderData } from "react-router";
import type { CourseResponse } from "./loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function SearchModule() {
  const data = useLoaderData() as CourseResponse;

  return (
    <div className="relative overflow-clip h-fit grow w-screen flex flex-col justify-start items-start text-black pb-10 max-md:-mt-10">
      <div className="w-full h-fit overflow-hidden md:hidden z-10">
        <img
          src={getAsset("/searchimgmobile.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top dark:hidden"
        />
        <img
          src={getAsset("/searchimgmobiledark.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top hidden dark:block"
        />
      </div>
      <div className="w-full h-fit relative bg-tosca-600 dark:bg-tosca-800 max-md:-mt-4 py-7 px-6 md:py-16 md:px-10 lg:py-24 lg:px-20 z-[9]">
        <div className="flex flex-col gap-6 w-full md:w-3/5">
          <div className="flex flex-col gap-3 md:gap-6 w-full">
            <div className="font-suez text-h5 md:text-h4 lg:text-h3 text-white max-md:text-center">
              Course Pelatihan
            </div>
            <div className="font-space text-s8 md:text-s7 lg:text-s6 text-white">
              Temukan course pelatihan yang inspiratif dari guru lain, atau
              biarkan Gemini AI menciptakan course yang sempurna untukmu!
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-6 w-full h-fit items-center justify-start">
            <div className="w-full max-lg:grid max-lg:grid-cols-12 max-lg:gap-3 max-lg:h-fit max-lg:items-center max-lg:justify-start">
              <div className="col-span-8">
                <Input
                  placeholder="Type here"
                  rightIcon={<Search />}
                  className="!h-10 md:!h-14 w-full col-span-8"
                />
              </div>
              <div className="col-span-4">
                <Drawer direction="bottom">
                  <DrawerTrigger className="lg:hidden w-full ">
                    <Button
                      variant={"secondary"}
                      className="w-full lg:hidden col-span-4"
                    >
                      Filter
                      <Filter />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="!w-full !max-w-none sm:!max-w-none bg-white dark:bg-[#2A2A2A]">
                    <DrawerHeader className="gap-3 justify-start items-start thin-scrollbar overflow-x-auto scrollbar-hide">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="font-space text-s6">Filters</div>
                        <DrawerClose className="text-black dark:text-white">
                          <X />
                        </DrawerClose>
                      </div>
                      <div className="space-y-7">
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Jenjang Pendidikan
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sd" />
                              <label
                                htmlFor="sd"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                SD
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="smp" />
                              <label
                                htmlFor="smp"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                SMP
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="sma" />
                              <label
                                htmlFor="sma"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                SMA
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Kuliah
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Tipe Pelatihan
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sd" />
                              <label
                                htmlFor="sd"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Pengelolaan Kelas
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="smp" />
                              <label
                                htmlFor="smp"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Pembelajaran Daring
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="sma" />
                              <label
                                htmlFor="sma"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Teknologi dalam Pendidikan
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Inovasi Pembelajaran
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Kurikulum dan Rencana Pembelajaran
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Teknik Evaluasi Pembelajaran
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Kendala
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sd" />
                              <label
                                htmlFor="sd"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Akses ke Materi
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="smp" />
                              <label
                                htmlFor="smp"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Teknologi & Infrastruktur
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="sma" />
                              <label
                                htmlFor="sma"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Pembelajaran Jarak Jauh
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Pengelolaan Kelas
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Metode Pengajaran
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Kendala Mental & Motivasi
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Bahasa
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sd" />
                              <label
                                htmlFor="sd"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Indonesia
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="smp" />
                              <label
                                htmlFor="smp"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Inggris
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="sma" />
                              <label
                                htmlFor="sma"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Daerah
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Mata Pelajaran
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sd" />
                              <label
                                htmlFor="sd"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Matematika
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="smp" />
                              <label
                                htmlFor="smp"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                IPA
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="sma" />
                              <label
                                htmlFor="sma"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Biologi
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="pt" />
                              <label
                                htmlFor="pt"
                                className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Fisika
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DrawerHeader>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
            <Button variant={"secondary"} className="w-full lg:w-fit">
              Buat Course Sendiri
              <BookMarked />
            </Button>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[35%] h-full overflow-hidden max-md:hidden">
          <img
            src={getAsset("/searchimg.webp")}
            alt="search-module"
            className="w-full h-full object-cover object-left dark:hidden"
          />
          <img
            src={getAsset("/searchimgdark.webp")}
            alt="search-module"
            className="w-full h-full object-cover object-left hidden dark:block"
          />
        </div>
      </div>
      <div className="flex flex-row w-full items-start justify-between">
        <div className="w-fit pt-[60px] px-20 border-r-[1px] border-border max-lg:hidden space-y-5 text-black dark:text-white">
          <div className="font-space text-s4">Filters</div>
          <div className="space-y-7">
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">
                Jenjang Pendidikan
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sd" />
                  <label
                    htmlFor="sd"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    SD
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="smp" />
                  <label
                    htmlFor="smp"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    SMP
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="sma" />
                  <label
                    htmlFor="sma"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    SMA
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Kuliah
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">
                Tipe Pelatihan
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sd" />
                  <label
                    htmlFor="sd"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pengelolaan Kelas
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="smp" />
                  <label
                    htmlFor="smp"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pembelajaran Daring
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="sma" />
                  <label
                    htmlFor="sma"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Teknologi dalam Pendidikan
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Inovasi Pembelajaran
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Kurikulum dan Rencana Pembelajaran
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Teknik Evaluasi Pembelajaran
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">Kendala</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sd" />
                  <label
                    htmlFor="sd"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Akses ke Materi
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="smp" />
                  <label
                    htmlFor="smp"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Teknologi & Infrastruktur
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="sma" />
                  <label
                    htmlFor="sma"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pembelajaran Jarak Jauh
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pengelolaan Kelas
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Metode Pengajaran
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Kendala Mental & Motivasi
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">
                Jenjang Pendidikan
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sd" />
                  <label
                    htmlFor="sd"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Indonesia
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="smp" />
                  <label
                    htmlFor="smp"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Inggris
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="sma" />
                  <label
                    htmlFor="sma"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Daerah
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">
                Mata Pelajaran
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sd" />
                  <label
                    htmlFor="sd"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Matematika
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="smp" />
                  <label
                    htmlFor="smp"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    IPA
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="sma" />
                  <label
                    htmlFor="sma"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Biologi
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pt" />
                  <label
                    htmlFor="pt"
                    className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Fisika
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-8 px-5 md:py-10 md:px-12 lg:py-[60px] lg:px-20 flex flex-col gap-8 md:gap-11 lg:gap-[60px]">
          <div className="space-y-4 md:space-y-5">
            <div className="font-space text-s6 md:text-s5 lg:text-s4 text-tosca-500">
              Courseku
            </div>
            <div className="max-md:flex max-md:flex-row max-md:overflow-x-auto max-md:no-scrollbar max-md:pb-2 max-md:gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {data.courseku.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  pros={course.courseType}
                  progress={course.progress}
                />
              ))}
            </div>
          </div>
          <div className="space-y-4 md:space-y-5">
            <div className="font-space text-s6 md:text-s5 lg:text-s4 text-tosca-500">
              Rekomendasi
            </div>
            <div className="max-md:flex max-md:flex-row max-md:overflow-x-auto max-md:no-scrollbar max-md:pb-2 max-md:gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {data.rekomendasi.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  pros={course.courseType}
                />
              ))}
            </div>
          </div>
          <div className="space-y-4 md:space-y-5">
            <div className="font-space text-s6 md:text-s5 lg:text-s4 text-tosca-500">
              Semua Course
            </div>
            <div className="max-md:gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {data.allcourse.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  pros={course.courseType}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Drawer direction="bottom">
        <DrawerTrigger className="md:hidden">
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 py-4 px-5 text-white bg-tosca-600 rounded-[24px]">
            <div className="font-space text-s8">Tanya AI</div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-white dark:bg-[#2A2A2A] md:hidden w-full thin-scrollbar overflow-y-auto">
          <DrawerHeader className="gap-8 justify-between items-center flex-row flex py-4 px-5">
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="font-suez text-h6 lg:text-h5 text-tosca-500">
                Tanya AI
              </div>
              <div className="py-2 px-4 flex flex-row gap-[6px] border-[1px] border-border rounded-full">
                <div className="font-space text-b8">Powered by</div>
              </div>
            </div>
            <DrawerClose className="self-end text-black dark:text-white">
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div className="w-full h-[2pt] bg-border" />
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-fit py-4 px-5 gap-8 flex flex-col justify-end items-start text-start">
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="w-full h-[0.5pt] bg-border" />
              <div className="p-5 pb-4 w-full flex-row flex gap-1 items-center justify-between !h-[92px]">
                <Input placeholder="Type here" className="w-[145%]" />
                <Button variant="secondary" className="!h-12 w-[20%] !px-4">
                  <ArrowRight />
                </Button>
              </div>
              <div className="pb-5 px-5 flex flex-row gap-[6pt] items-center justify-center w-full">
                <div className="font-space text-b8 w-fit whitespace-nowrap">
                  Pilih mode:
                </div>
                <Select>
                  <SelectTrigger className="w-full !py-2 !px-3 !h-8 !rounded-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">
                      Tambahkan Konteks Profil Saya
                    </SelectItem>
                    <SelectItem value="false">
                      Tidak Tambahkan Konteks Profil Saya
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="right">
        <DrawerTrigger className="max-md:hidden">
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 py-4 px-5 text-white bg-tosca-600 rounded-[24px]">
            <div className="font-space text-s7">Tanya AI</div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-white dark:bg-[#2A2A2A] max-md:hidden w-[429px]">
          <DrawerHeader className="gap-8 justify-between items-center flex-row flex py-4 px-5">
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="font-suez text-h6 lg:text-h5 text-tosca-500">
                Tanya AI
              </div>
              <div className="py-2 px-4 flex flex-row gap-[6px] border-[1px] border-border rounded-full">
                <div className="font-space text-b8">Powered by</div>
              </div>
            </div>
            <DrawerClose className="self-end text-black dark:text-white">
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div className="w-full h-[1pt] bg-border" />
          <div className="flex flex-col w-full h-full justify-between">
            <div className="w-full h-full py-4 px-5 gap-8 flex flex-col justify-end items-start text-start overflow-y-auto thin-scrollbar">
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="w-full h-[0.5pt] bg-border" />
              <div className="p-5 pb-4 w-full flex-row flex gap-1 items-center justify-between !h-[92px]">
                <Input placeholder="Type here" className="w-[145%]" />
                <Button variant="secondary" className="!h-12 w-[20%] !px-4">
                  <ArrowRight />
                </Button>
              </div>
              <div className="pb-5 px-5 flex flex-row gap-[6pt] items-center justify-center w-full">
                <div className="font-space text-b8 w-fit whitespace-nowrap">
                  Pilih mode:
                </div>
                <Select>
                  <SelectTrigger className="w-full !py-2 !px-3 !h-8 !rounded-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">
                      Tambahkan Konteks Profil Saya
                    </SelectItem>
                    <SelectItem value="false">
                      Tidak Tambahkan Konteks Profil Saya
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
