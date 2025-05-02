import type { ActionFunctionArgs } from "react-router";
import { z } from "zod";
import { fetcher } from "~/lib/fetch.server";

export async function CreateCourseAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const language = formData.get("language") as string;
  const level = formData.get("level") as string;
  const courseType = formData.get("courseType") as string;
  const courseSubject = formData.get("courseSubject") as string;

  try {
    const schema = z.object({
      title: z.string().nonempty("Harap isi judul Course"),
      description: z.string().nonempty("Harap isi deskripsi Course"),
      language: z.string().nonempty("Harap isi bahasa Course"),
      level: z.string().nonempty("Harap isi Jenjang Course"),
      courseType: z.string().nonempty("Harap isi Tipe Pelatihan"),
      courseSubject: z.string().nonempty("Harap isi Mata Pelajaran Course"),
    });

    const parsedData = await schema.parseAsync({
      title,
      description,
      language,
      level,
      courseType,
      courseSubject,
    });

    console.log("Parsed Data", parsedData);


    return {
      message: "RPP Berhasil Dibuat",
      success: true,
      //id: response?.data?.id,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: error.flatten().fieldErrors, success: false };
    }

    return { message: "Internal server error", success: false };
  }
}
