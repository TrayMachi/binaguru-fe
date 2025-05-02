import { Link, useLoaderData, useNavigate } from "react-router";
import type { EvaluasiLoader } from "./loader";
import { Button } from "~/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { marked } from "marked";
import { Input } from "~/components/ui/input";

export default function EvaluasiModule() {
  const { evaluasi, assignment } = useLoaderData<typeof EvaluasiLoader>();

  const navigate = useNavigate();

  return (
    <div className="relative overflow-clip h-fit grow w-screen flex flex-col gap-6 md:gap-7 lg:gap-8 justify-start items-start text-black py-8 px-5 md:p-14 lg:p-20">
      <Button onClick={() => navigate(-1)} variant="ghost" className="w-fit">
        <ArrowLeft />
        Back
      </Button>

      <div className="w-full flex flex-col gap-3 text-black dark:text-white">
        <div className="font-suez text-h3 md:text-h2 text-tosca-500">
          Evaluasi Tugas
        </div>
        <div className="font-suez text-h6 md:text-h5">{assignment?.title}</div>
      </div>

      <div className="w-full h-[1pt] bg-border" />

      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-7 text-black dark:text-white justify-start items-start">
        <div className="font-space text-b8 md:text-b7 w-full">
          {evaluasi?.contentMarkdown}
        </div>
      </div>
    </div>
  );
}
