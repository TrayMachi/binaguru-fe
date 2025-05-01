import { useLoaderData, useNavigate } from "react-router";
import type { RPPHistoryLoader, RPPHistoryInterface } from "./loader";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { marked } from "marked";

export const RPPHistoryModule = () => {
  const rppHistoryData = useLoaderData<typeof RPPHistoryLoader>();
  const [selectedRPP, setSelectedRPP] = useState<RPPHistoryInterface | null>(
    rppHistoryData?.data?.[0] ?? null
  );
  const navigate = useNavigate();

  function stripMarkdownCodeBlock(md: string) {
    return md.replace(/^<pre><code[^>]*>/, "").replace(/<\/code><\/pre>$/, "");
  }

  return (
    <main className="md:p-20 px-5 py-8 w-full">
      <Button onClick={() => navigate("/rpp")} variant={"ghost"}>
        <ArrowLeft /> Back
      </Button>
      {rppHistoryData?.data && rppHistoryData.data.length > 0 ? (
        <div className="md:mt-20 mt-6 flex max-md:flex-col md:gap-8 gap-6">
          <div className="max-md:hidden flex flex-col gap-8">
            {rppHistoryData.data.map((rpp) => (
              <div
                key={rpp.id}
                onClick={() => setSelectedRPP(rpp)}
                className={cn(
                  "border rounded-[12px] py-4 px-5 w-[310px] hover:bg-tosca-100 dark:hover:bg-tosca-500 transition-all duration-300 ease-in-out cursor-pointer",
                  selectedRPP?.id === rpp.id
                    ? "bg-tosca-100 dark:bg-tosca-500"
                    : "bg-white dark:bg-black"
                )}
              >
                <h2 className="text-s7 whitespace-nowrap">{rpp.title}</h2>
              </div>
            ))}
          </div>
          {selectedRPP && (
            <div>
              <div
                className="prose lg:prose-lg prose-zinc dark:prose-invert prose-headings:text-tosca-500 prose-headings:font-semibold prose-headings:mt-0 prose-headings:mb-2 prose-headings:leading-tight"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(
                    stripMarkdownCodeBlock(selectedRPP.contentMarkdown)
                  ),
                }}
              ></div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-xl font-semibold">Tidak ada RPP Tersedia</h2>
          <p className="text-gray-500">
            Kamu belum mencoba membuat RPP sama sekali.
          </p>
        </div>
      )}
    </main>
  );
};
