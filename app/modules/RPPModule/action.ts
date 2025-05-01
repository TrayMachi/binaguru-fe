import type { ActionFunctionArgs } from "react-router";
import { z } from "zod";
import { fetcher } from "~/lib/fetch.server";
import type { RPPInterface } from "./interface";

export async function RPPAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  try {
    const schema = z.object({
      title: z.string().nonempty("Harap isi judul RPP"),
      description: z.string().nonempty("Harap isi deskripsi RPP"),
    });

    const parsedData = await schema.parseAsync({
      title,
      description,
    });

    const response = await fetcher<RPPInterface>("rpp", request, {
      method: "POST",
      body: JSON.stringify(parsedData),
    });

    if (!response.success) {
      return {
        message: response.error || "Gagal membuat RPP",
        success: false,
      };
    }

    return {
      message: "RPP Berhasil Dibuat",
      success: true,
      id: response?.data?.id,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: error.flatten().fieldErrors, success: false };
    }

    return { message: "Internal server error", success: false };
  }
}
