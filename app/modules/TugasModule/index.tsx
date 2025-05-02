import { Link, useLoaderData, useNavigate } from "react-router";
import type { TugasLoader } from "./loader";
import { Button } from "~/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { marked } from "marked";
import { Input } from "~/components/ui/input";

export default function ModuleModule() {
  const { assignment } = useLoaderData<typeof TugasLoader>();

  const navigate = useNavigate();

  return (
    <div className="relative overflow-clip h-fit grow w-screen flex flex-col gap-6 md:gap-7 lg:gap-8 justify-start items-start text-black py-8 px-5 md:p-14 lg:p-20">
      <Button onClick={() => navigate(-1)} variant="ghost" className="w-fit">
        <ArrowLeft />
        Back
      </Button>

      <div className="w-full flex flex-col gap-3 text-black dark:text-white">
        <div className="font-suez text-h3 md:text-h2 text-tosca-500">Tugas</div>
        <div className="font-suez text-h6 md:text-h5">{assignment?.title}</div>
        <div className="font-space text-b8">
          Dengan menyelesaikan tugas ini, Gemini AI akan membantu mengevaluasi
          hasil kerja Anda dan memberikan umpan balik untuk pengembangan lebih
          lanjut.
        </div>
      </div>

      <div className="w-full h-[1pt] bg-border" />

      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-7 text-black dark:text-white justify-start items-start">
        <div className="font-space text-b8 md:text-b7 w-full">
          {assignment?.description}
        </div>

        <div className="flex flex-col gap-5 md:gap-6 bg-white dark:bg-[#2A2A2A] rounded-[24px] shadow-md w-full">
          <Input
            required
            id="submissionLink"
            name="submissionLink"
            autoComplete="submissionLink"
            label="Link Video Tugas"
            placeholder="Ketik link video tugas yang Anda upload di Youtube..."
            layout="col-span-2"
          />
          <Button className="w-full">Kirim Tugas</Button>
        </div>
      </div>
    </div>
  );
}
