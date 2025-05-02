import { Link, useLoaderData, useNavigate } from "react-router";
import type { EvaluasiLoader } from "./loader";
import { Button } from "~/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { marked } from "marked";
import { Input } from "~/components/ui/input";

export default function EvaluasiModule() {
  const { evaluasi, assignment } = useLoaderData<typeof EvaluasiLoader>();

  const navigate = useNavigate();

  function stripMarkdownCodeBlock(md: string) {
    return md.replace(/^```markdown/, "").replace(/```$/, "");
  }

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
        <div
          className="prose lg:prose-lg prose-zinc dark:prose-invert prose-headings:text-tosca-500 prose-headings:font-semibold prose-headings:mt-0 prose-headings:mb-2 prose-headings:leading-tight w-full max-w-full"
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              stripMarkdownCodeBlock(evaluasi?.contentMarkdown ?? "")
            ),
          }}
        ></div>
        <div className="font-space text-b8">
          Dengan menyelesaikan tugas ini, Gemini AI akan membantu mengevaluasi
          hasil kerja Anda dan memberikan umpan balik untuk pengembangan lebih
          lanjut.
        </div>
      </div>

      <div className="w-full flex flex-row justify-end items-center">
        <Link to={`/tugas/${assignment?.id}`}>
          <Button variant="secondary" className="w-fit">
            Revisi Tugas
          </Button>
        </Link>
        <Link to="/course">
          <Button>Selesaikan Modul</Button>
        </Link>
      </div>
    </div>
  );
}
