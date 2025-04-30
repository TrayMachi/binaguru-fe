import { redirect, type ActionFunctionArgs } from "react-router";
import { cons as consList, pros as prosList } from "./const";
import { number, z } from "zod";
import { levels } from "~/components/elements/LevelCombobox";
import type { ResponseInterface } from "~/lib/utils";

export async function EditProfileAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const location = formData.get("location");
  const birthDate = formData.get("birthDate");
  const yoe = formData.get("yoe");
  const level = formData.get("level");

  const cons: string[] = [];
  const pros: string[] = [];
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      if (formData.getAll(key).length > 1) continue; // skip multi-value keys for now
      if (
        key !== "username" &&
        key !== "email" &&
        key !== "password" &&
        key !== "location" &&
        key !== "birthDate" &&
        key !== "yoe"
      ) {
        cons.push(key);
        pros.push(key);
      }
    }
  }
  const checkedCons = consList.filter((c) => formData.get(c));
  const checkedPros = prosList.filter((p) => formData.get(p));

  const body = {
    username,
    email,
    password,
    location,
    birthDate,
    yoe: yoe === '' ? -1 : Number(yoe),
    level,
    pros: checkedPros,
    cons: checkedCons,
  };

  try {
    const schema = z.object({
      email: z.string().email("Format email tidak valid"),
      password: z.string().min(8, "Password minimal 8 karakter"),
      username: z.string().nonempty("Nama pengguna tidak boleh kosong"),
      yoe: z.number().min(0, "Pengalaman mengajar tidak valid"),
      location: z.string().nonempty("Lokasi tidak boleh kosong"),
      pros: z.array(z.string()).nonempty("Pilih setidaknya satu minat Anda"),
      cons: z.array(z.string()).nonempty("Pilih setidaknya satu kendala Anda"),
      birthDate: z.string().date("Tanggal lahir tidak valid"),
      level: z.string().refine((val) => levels.includes(val), {
        message: "Pilih sesuai dengan jenjang yang Anda ajarkan",
      }),
    });

    const result = await schema.parseAsync(body);

    const response = await fetch(`${process.env.API_URL}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...result}),
    });

    const data: ResponseInterface<undefined> = await response.json();

    if (!data.success) {
    console.log(data.message)
      return {
        message: data.message,
        success: false,
      };
    }

    return redirect("/login");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: error.flatten().fieldErrors, success: false };
    }

    return { message: "Internal server error", success: false };
  }
}
