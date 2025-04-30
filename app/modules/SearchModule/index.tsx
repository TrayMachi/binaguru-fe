import { Bookmark, BookMarked, Filter, Search } from "lucide-react";
import { CourseCard } from "~/components/elements/CourseCard";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { getAsset } from "~/lib/getAsset";

export default function SearchModule() {
  const dummyCourseData = [
    {
      id: "1",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Volutpat",
      description:
        "Pelajari cara mengelola kelas digital dengan efektif untuk pembelajaran jarak jauh",
      level: "Pemula",
      pros: "Pengelolaan Kelas",
      progress: 50,
    },
    {
      id: "2",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Volutpat",
      description:
        "Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas",
      level: "Menengah",
      pros: "Kurikulum dan Rencana Pembelajaran",
      progress: 75,
    },
    {
      id: "2",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Volutpat",
      description:
        "Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas",
      level: "Menengah",
      pros: "Kurikulum dan Rencana Pembelajaran",
      progress: 75,
    },
    {
      id: "2",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Volutpat",
      description:
        "Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas Teknik pengajaran modern untuk meningkatkan keterlibatan siswa dalam kelas",
      level: "Menengah",
      pros: "Kurikulum dan Rencana Pembelajaran",
      progress: 75,
    },
  ];

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
                <Button
                  variant={"secondary"}
                  className="w-full lg:hidden col-span-4"
                >
                  Filter
                  <Filter />
                </Button>
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
              {dummyCourseData.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  pros={course.pros}
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
              {dummyCourseData.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  pros={course.pros}
                  progress={course.progress}
                />
              ))}
            </div>
          </div>
          <div className="space-y-4 md:space-y-5">
            <div className="font-space text-s6 md:text-s5 lg:text-s4 text-tosca-500">
              Semua Course
            </div>
            <div className="max-md:gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {dummyCourseData.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  pros={course.pros}
                  progress={course.progress}
                  className="!w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
