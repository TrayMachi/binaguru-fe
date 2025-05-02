import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router";
import type { TugasLoader } from "./loader";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Input } from "~/components/ui/input";
import { getAsset } from "~/lib/getAsset";
import { useEffect } from "react";
import type { TugasAction } from "./action";
import { toast } from "~/hooks/use-toast";

export default function TugasModule() {
  const { assignment } = useLoaderData<typeof TugasLoader>();
  const actionData = useActionData<typeof TugasAction>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success) {
      toast({
        title: "Berhasil mengirim tugas",
        variant: "success",
      });
      navigate(`/evaluasi/${assignment?.id}`);
    } else if (
      actionData &&
      !actionData.success &&
      typeof actionData?.message === "string"
    ) {
      toast({
        title: actionData?.message,
        variant: "error",
      });
    }
  }, [actionData]);

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
          <br />
          <br />
          Petunjuk Pengumpulan: <br />- Rekam video Anda dengan durasi maksimal
          1 menit. <br />- Unggah video ke YouTube dengan status Publik.
          <br />- Salin link video YouTube Anda. <br />- Tempelkan link tersebut
          pada kolom yang tersedia di bawah ini.
        </div>

        <div className="flex flex-col gap-5 md:gap-6 bg-white dark:bg-[#2A2A2A] rounded-[24px] shadow-md w-full pb-5 md:pb-6">
          <img src={getAsset("/Ngajar.webp")} className="self-center w-full" />
          <Form method="post" className="px-5">
            <Input
              required
              id="submissionLink"
              name="submissionLink"
              autoComplete="submissionLink"
              disabled={isSubmitting}
              label="Link Video Tugas"
              placeholder="Ketik link video tugas yang Anda upload di Youtube..."
              layout="col-span-2"
              className=""
            />
            <Button disabled={isSubmitting} type="submit" className="w-full">
              Kirim Tugas
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
