import { ArrowLeft } from "lucide-react";
import { Link, useLoaderData } from "react-router";
import { Button } from "~/components/ui/button";
import { getAsset } from "~/lib/getAsset";
import type { CourseLoader } from "./loader";

export default function CourseModule() {
  const { course } = useLoaderData<typeof CourseLoader>();

  return (
    <div className="relative overflow-clip h-fit grow w-screen flex flex-col gap-6 md:gap-7 lg:gap-8 justify-start items-start">
      <div className="w-full h-fit overflow-hidden z-10">
        <img
          src={getAsset("/coursemobile.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top dark:hidden md:hidden"
        />
        <img
          src={getAsset("/coursedarkmobile.webp")}
          alt="halo"
          className="w-full h-full object-cover object-top hidden max-md:dark:block"
        />
        <img
          src={getAsset("/course.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top dark:hidden max-md:hidden"
        />
        <img
          src={getAsset("/coursedark.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top hidden md:dark:block"
        />
      </div>

      <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 justify-start items-start text-black dark:text-white px-5 pb-8 md:px-10 md:pb-14 lg:px-20 lg:pb-20 w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <Link to="/course">
            <Button variant="ghost">
              <ArrowLeft />
              Back
            </Button>
          </Link>
          <Button variant="ghost" className="md:hidden hover:cursor-auto">
            Progres: {course?.course?.progress}%
          </Button>
        </div>

        <div className="flex flex-row justify-between items-start gap-6 w-full">
          <div className="space-y-3">
            <div className="font-suez text-h5 md:text-h4 lg:text-h3">
              {course?.course?.title}
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide pb-2 thin-scrollbar">
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8">
                {course?.course?.courseType}
              </div>
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8">
                {course?.course?.level}
              </div>
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8 max-md:hidden">
                Mata Pelajaran: {course?.course?.courseSubject}
              </div>
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8 max-md:hidden">
                Bahasa: {course?.course?.language}
              </div>
            </div>
          </div>
          <Button variant="ghost" className="max-md:hidden hover:cursor-auto">
            Progres: {course?.course?.progress}%
          </Button>
        </div>

        <div className="w-full font-space text-b8 md:text-b7">
          {course?.course?.description}
        </div>

        <div className="font-suez text-tosca-500 text-h6 md:text-h5">Modul</div>

        {course?.modules?.map((module) => (
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3 bg-white dark:bg-[#2A2A2A] px-7 py-5 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
            <div className="font-space text-s8 md:text-s7">{module.title}</div>
            <div className="flex flex-col lg:flex-row gap-3 max-lg:w-full">
              {module.hasAssignment && (
                <>
                  <Button variant="ghost" className="max-lg:w-full">
                    Submit Ulang Tugas
                  </Button>
                  <Button variant="secondary" className="max-lg:w-full">
                    Hasil Evaluasi Tugas
                  </Button>
                </>
              )}
              <Button variant="primary" className="max-lg:w-full">
                Lihat Modul
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
