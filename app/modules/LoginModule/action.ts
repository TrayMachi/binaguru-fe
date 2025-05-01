import { redirect, type ActionFunctionArgs } from "react-router";
import { sessionCookie, refreshCookie } from "~/lib/auth.server";
import { z } from "zod";
import type { ResponseInterface } from "~/lib/utils";

interface LoginData {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
}

export async function LoginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const schema = z.object({
      email: z.string().nonempty("Username is required"),
      password: z.string().nonempty("Password is required"),
    });

    const result = await schema.parseAsync({ email, password });

    const response = await fetch(`${process.env.API_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });

    const data: ResponseInterface<LoginData> = await response.json();

    if (!data.success) {
      return { message: data.message, success: false };
    }

    const { idToken, refreshToken } = data.data;

    const cookie = await sessionCookie.serialize(idToken);
    const cookie2 = await refreshCookie.serialize(refreshToken);

    return redirect("/", {
      headers: {
        "Set-Cookie": `${cookie}, ${cookie2}`,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: error.flatten().fieldErrors, success: false };
    }

    return { message: "Internal server error", success: false };
  }
}
