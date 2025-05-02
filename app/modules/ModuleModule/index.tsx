import { Link, useLoaderData } from "react-router";
import type { ModuleLoader } from "./loader";
import { Button } from "~/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

export default function ModuleModule() {
  const { module } = useLoaderData<typeof ModuleLoader>();

  return (
    <div className="relative overflow-clip h-fit grow w-screen flex flex-col gap-4 justify-start items-start text-black py-10 md:py-14 lg:py-20">
      <div className="w-full flex flex-col gap-6 md:gap-7 lg:gap-8 pb-8 md:pb-12 lg:pb-20 px-5 md:px-10 lg:px-20 text-black dark:text-white">
        <div className="w-full flex flex-row justify-between items-center">
          <Button variant="ghost" className="w-fit">
            <ArrowLeft />
            Back
          </Button>
          {module?.submissionLink && (
            <Button variant="secondary" className="w-fit md:hidden">
              Lihat Feedback Tugas
            </Button>
          )}
        </div>

        <div className="w-full flex flex-row justify-between items-start gap-6">
          <div className="font-suez text-h5 md:text-h4 lg:text-h3">
            {module?.title}
          </div>
          {module?.submissionLink && (
            <Button variant="secondary" className="w-fit max-md:hidden">
              Lihat Feedback Tugas
            </Button>
          )}
        </div>

        <div className="w-full bg-white dark:bg-black rounded-[12px] shadow-md p-4 md:py-5 md:px-7 font-space text-b8 md:text-b7 lg-text-b6">
          {module?.contentMarkdown}
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 bg-yellow-500 dark:bg-yellow-700 text-white dark:text-white rounded-[24px] md:rounded-[32px] py-5 px-6 md:py-10 md:px-13">
          <div className="font-space text-s8 md:text-s7 lg:text-s6 font-bold">
            Selamat! Anda telah menyelesaikan modul ini. Selanjutnya, Anda akan
            mengerjakan tugas lanjutan. Silakan membaca kembali materi jika
            diperlukan, atau langsung klik tombol di samping untuk melanjutkan.
          </div>
          <Link to={`/tugas/${module?.assignmentId}`}>
            <Button className="w-full lg:w-fit">
              <FileText />
              Kerjakan Tugas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
