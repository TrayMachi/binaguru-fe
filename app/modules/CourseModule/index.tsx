import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { getAsset } from "~/lib/getAsset";

export default function CourseModule() {
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

      <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 justify-start items-start text-black dark:text-white px-5 pb-8 md:px-10 md:pb-14 lg:px-20 lg:pb-20">
        <div className="flex flex-row justify-between items-center w-full">
          <Link to="/course">
            <Button variant="ghost">
              <ArrowLeft />
              Back
            </Button>
          </Link>
          <Button variant="ghost" className="md:hidden hover:cursor-auto">
            Progres: 50%
          </Button>
        </div>

        <div className="flex flex-row justify-between items-start gap-6 w-full">
          <div className="space-y-3">
            <div className="font-suez text-h5 md:text-h4 lg:text-h3">
              Menyusun RPP Matematika Kelas 5 yang Efektif
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide pb-2 thin-scrollbar">
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8">
                Kurikulum dan Rencana Pembelajaran
              </div>
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8">
                Kuliah
              </div>
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8 max-md:hidden">
                Mata Pelajaran: Matematika
              </div>
              <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8 max-md:hidden">
                Bahasa Indonesia
              </div>
            </div>
          </div>
          <Button variant="ghost" className="max-md:hidden hover:cursor-auto">
            Progres: 50%
          </Button>
        </div>

        <div className="w-full font-space text-b8 md:text-b7">
          Course ini dirancang untuk membekali guru dengan keterampilan menyusun
          Rencana Pelaksanaan Pembelajaran (RPP) Matematika Kelas 5 secara
          sistematis, efektif, dan sesuai kurikulum. Melalui serangkaian modul,
          Anda akan belajar menganalisis standar kompetensi, merancang kegiatan
          belajar yang kontekstual dan menarik, memilih media pembelajaran yang
          tepat, serta mengintegrasikan strategi penilaian ke dalam RPP. Dengan
          pendekatan berbasis praktik dan evaluasi, Anda akan mampu menghasilkan
          RPP yang mendukung ketercapaian tujuan pembelajaran dan meningkatkan
          partisipasi aktif siswa di kelas.
        </div>

        <div className="font-suez text-tosca-500 text-h6 md:text-h5">Modul</div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3 bg-white dark:bg-[#2A2A2A] px-7 py-5 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
          <div className="font-space text-s8 md:text-s7">
            Memahami Standar Kompetensi dan Kompetensi Dasar Matematika Kelas 5
          </div>
          <div className="flex flex-col lg:flex-row gap-3 max-lg:w-full">
            <Button variant="ghost" className="max-lg:w-full">
              Submit Ulang Tugas
            </Button>
            <Button variant="secondary" className="max-lg:w-full">
              Hasil Evaluasi Tugas
            </Button>
            <Button variant="primary" className="max-lg:w-full">
              Lihat Modul
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3 bg-white dark:bg-[#2A2A2A] px-7 py-5 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
          <div className="font-space text-s8 md:text-s7">
            Memahami Standar Kompetensi dan Kompetensi Dasar Matematika Kelas 5
          </div>
          <div className="flex flex-col lg:flex-row gap-3 max-lg:w-full">
            <Button variant="ghost" className="max-lg:w-full">
              Submit Ulang Tugas
            </Button>
            <Button variant="secondary" className="max-lg:w-full">
              Hasil Evaluasi Tugas
            </Button>
            <Button variant="primary" className="max-lg:w-full">
              Lihat Modul
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3 bg-white dark:bg-[#2A2A2A] px-7 py-5 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
          <div className="font-space text-s8 md:text-s7">
            Memahami Standar Kompetensi dan Kompetensi Dasar Matematika Kelas 5
          </div>
          <div className="flex flex-col lg:flex-row gap-3 max-lg:w-full">
            <Button variant="primary" className="max-lg:w-full">
              Lihat Modul
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3 bg-white dark:bg-[#2A2A2A] px-7 py-5 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
          <div className="font-space text-s8 md:text-s7">
            Memahami Standar Kompetensi dan Kompetensi Dasar Matematika Kelas 5
          </div>
          <div className="flex flex-col lg:flex-row gap-3 max-lg:w-full">
            <Button variant="primary" className="max-lg:w-full">
              Lihat Modul
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
