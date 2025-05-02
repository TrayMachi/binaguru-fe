import type { ActionFunctionArgs } from "react-router";
import { z } from "zod";
import { fetcher } from "~/lib/fetch.server";

export async function TugasAction({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submissionLink = formData.get("submissionLink") as string;

  try {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/((watch\?v=)|shorts\/)?([^&]+).*/;
    const schema = z.object({
      submissionLink: z
        .string()
        .nonempty("Harap isi link video tugas")
        .regex(
          youtubeRegex,
          "Link yang Anda masukkan bukan link video Youtube yang valid"
        ),
    });

    const { id } = params;

    const parsedData = await schema.parseAsync({
      submissionLink,
    });

    const response = await fetcher<undefined>("submissions", request, {
      method: "POST",
      body: JSON.stringify({
        assignmentId: id,
        contentLink: parsedData.submissionLink,
      }),
    });

    if (!response.success) {
      return {
        message: response.error || "Gagal mengirim tugas",
        success: false,
      };
    }

    return {
      message: "Tugas Berhasil Dikirim",
      success: true,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: error.flatten().fieldErrors, success: false };
    }

    return { message: "Internal server error", success: false };
  }
}
