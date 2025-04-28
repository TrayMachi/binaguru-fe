import React from "react";
import { Form, useActionData, useNavigate, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import type { LoginAction } from "./action";

export const LoginModule = () => {
  const actionData = useActionData<typeof LoginAction>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center h-[90svh]">
      <section className="md:w-[380px] w-[310px] p-8 rounded-[24px] shadow-lg space-y-3 md:space-y-5 dark:bg-[#2A2A2A] bg-white">
        <h1 className="text-h4 font-suez text-center">Login</h1>
        <Form method="post" className="flex flex-col gap-3 md:gap-5">
          <Input
            required
            id="email"
            type="email"
            name="email"
            disabled={isSubmitting}
            autoComplete="email"
            label="Email"
            placeholder="Ketik email Anda di sini..."
            error={
              typeof actionData?.message === "object" &&
              "email" in actionData.message
                ? actionData.message.email?.[0]
                : undefined
            }
          />
          <Input
            required
            id="password"
            name="password"
            type="password"
            disabled={isSubmitting}
            autoComplete="password"
            label="Password"
            placeholder="Ketik password Anda di sini..."
            error={
              typeof actionData?.message === "object" &&
              "password" in actionData.message
                ? actionData.message.password?.[0]
                : undefined
            }
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Masuk
          </Button>
          <p className="text-b8">
            Belum punya akun?{" "}
            <span
              onClick={() => navigate("/register")}
              className="underline text-tosca-500 hover:cursor-pointer"
            >
              Register
            </span>
          </p>
        </Form>
      </section>
    </main>
  );
};
