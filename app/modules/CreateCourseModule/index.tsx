import { ArrowLeft, BookMarked } from "lucide-react";
import { useEffect, useState } from "react";
import { useActionData, useNavigation, useNavigate, Form } from "react-router";
import { toast } from "~/hooks/use-toast";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import type { CreateCourseAction } from "./action";
import { LevelCombobox } from "~/components/elements/LevelCombobox";
import { TypeCombobox } from "./elements/TypeCombobox";
import { getAsset } from "~/lib/getAsset";

export const CreateCourseModule = () => {
  const actionData = useActionData<typeof CreateCourseAction>();
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success) {
      toast({
        title: "Coure Berhasil Dibuat",
        variant: "success",
      });
      navigate(`/course/${actionData?.id}`);
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
    <main className="flex flex-col gap-6 md:gap-8 md:p-20 px-5 py-8 w-full">
      <Button
        onClick={() => navigate("/course")}
        variant={"ghost"}
        className="max-w-30"
      >
        <ArrowLeft /> Back
      </Button>
      <h1 className="md:text-h3 text-h6 font-suez flex max-md:flex-col max-md:items-center max-md:text-center gap-2">
        Personalisasi Coursemu Bersama <img src={getAsset("/Gemini.webp")} alt="logo" className="w-22 object-contain" />
      </h1>
      <Form method="post" className="flex flex-col w-full gap-5 md:gap-6">
        <Input
          required
          id="title"
          type="text"
          name="title"
          label="Judul Course"
          disabled={isSubmitting}
          autoComplete="title"
          placeholder="Ketik judul dari Course Anda di sini..."
          layout="w-full"
          error={
            typeof actionData?.message === "object" &&
            "title" in actionData.message
              ? actionData.message.title?.[0]
              : undefined
          }
        />
        <Textarea
          required
          id="description"
          name="description"
          disabled={isSubmitting}
          label="Deskripsikan dengan lengkap course pelatihan yang kamu butuhkan"
          autoComplete="description"
          placeholder="Ketik secara lengkap kebutuhan course pelatihan yang Anda inginkan di sini..."
          layout="w-full"
          className="resize-none h-[150px]"
          error={
            typeof actionData?.message === "object" &&
            "description" in actionData.message
              ? actionData.message.description?.[0]
              : undefined
          }
        />
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <Input
            required
            id="language"
            type="text"
            name="language"
            label="Bahasa Course"
            disabled={isSubmitting}
            autoComplete="title"
            placeholder="Ketik bahasa dari Course Anda di sini..."
            layout="w-full"
            error={
              typeof actionData?.message === "object" &&
              "language" in actionData.message
                ? actionData.message.language?.[0]
                : undefined
            }
          />
          <input type="hidden" name="level" className="hidden" value={level} />
          <LevelCombobox
            value={level}
            setValue={setLevel}
            error={
              typeof actionData?.message === "object" &&
              "level" in actionData.message
                ? actionData.message.level?.[0]
                : undefined
            }
          />
          <input
            type="hidden"
            name="courseType"
            className="hidden"
            value={type}
          />
          <TypeCombobox
            value={type}
            setValue={setType}
            error={
              typeof actionData?.message === "object" &&
              "courseType" in actionData.message
                ? actionData.message.courseType?.[0]
                : undefined
            }
          />
          <Input
            required
            id="courseSubject"
            type="text"
            name="courseSubject"
            label="Mata Pelajaran"
            disabled={isSubmitting}
            autoComplete="courseSubject"
            placeholder="Ketik mata pelajaran dari Course Anda di sini..."
            layout="w-full"
            error={
              typeof actionData?.message === "object" &&
              "courseSubject" in actionData.message
                ? actionData.message.courseSubject?.[0]
                : undefined
            }
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-w-full md:w-fit md:self-end"
        >
          <BookMarked />
          {isSubmitting ? "Sedang dibuat..." : "Buat Course"}
        </Button>
      </Form>
    </main>
  );
};
