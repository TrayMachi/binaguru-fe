import { useEffect, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router";
import { Input } from "~/components/ui/input";
import type { RegisterAction } from "../action";
import { LevelCombobox } from "~/components/elements/LevelCombobox";
import { cons, pros } from "../const";
import { Checkbox } from "~/components/ui/checkbox";
import { TriangleAlert } from "lucide-react";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { toast } from "~/hooks/use-toast";

export const RegisterForm = () => {
  const actionData = useActionData<typeof RegisterAction>();
  const [level, setLevel] = useState("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.success) {
      toast({
        title: "Register Berhasil",
        variant: "success",
      });
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
    <section className="py-7 px-5 md:p-20 md:space-y-7 space-y-6 w-full">
      <h1 className="text-h4 font-suez">Registrasi Guru</h1>
      <Form
        method="post"
        className="flex flex-col lg:grid lg:grid-cols-2 gap-y-6 md:gap-7 md:gap-x-6 w-full"
      >
        <Input
          required
          id="username"
          name="username"
          disabled={isSubmitting}
          autoComplete="username"
          label="Nama Lengkap"
          placeholder="Ketik nama lengkap Anda di sini..."
          layout="col-span-2"
          error={
            typeof actionData?.message === "object" &&
            "username" in actionData.message
              ? actionData.message.username?.[0]
              : undefined
          }
        />
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
          placeholder="Minimal 8 karakter (huruf, angka, karakter spesial)"
          error={
            typeof actionData?.message === "object" &&
            "password" in actionData.message
              ? actionData.message.password?.[0]
              : undefined
          }
        />
        <Input
          required
          id="location"
          name="location"
          disabled={isSubmitting}
          autoComplete="location"
          label="Lokasi"
          placeholder="Ketik lokasi Anda mengajar di sini..."
          error={
            typeof actionData?.message === "object" &&
            "location" in actionData.message
              ? actionData.message.location?.[0]
              : undefined
          }
        />
        <Input
          required
          id="birthDate"
          type="date"
          name="birthDate"
          disabled={isSubmitting}
          autoComplete="username"
          label="Tanggal Lahir"
          placeholder="Ketik tanggal lahir Anda di sini..."
          error={
            typeof actionData?.message === "object" &&
            "birthDate" in actionData.message
              ? actionData.message.birthDate?.[0]
              : undefined
          }
        />
        <Input
          required
          id="yoe"
          name="yoe"
          disabled={isSubmitting}
          autoComplete="yoe"
          type="number"
          min="0"
          label="Pengalaman Menagajar"
          placeholder="Ketik berapa tahun pengalaman anda mengajar..."
          error={
            typeof actionData?.message === "object" &&
            "yoe" in actionData.message
              ? actionData.message.yoe?.[0]
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
        <div>
          <Label>
            Kendala dalam Mengajar (bisa pilih lebih dari satu)
            <span className="text-red-600"> *</span>
          </Label>
          <div className="md:p-5 p-4 mt-2 dark:bg-[#2A2A2A] bg-white rounded-lg border flex flex-col gap-5">
            {cons.map((cons, index) => (
              <div className="flex items-center gap-2" key={index}>
                <Checkbox
                  disabled={isSubmitting}
                  key={index}
                  id={cons}
                  name={cons}
                  value={cons}
                />
                <label htmlFor={cons} className="text-b8">
                  {cons}
                </label>
              </div>
            ))}
            {typeof actionData?.message === "object" &&
              "cons" in actionData.message && (
                <div className="flex gap-2 items-center text-error">
                  <TriangleAlert className="w-4" />
                  <span className="text-sm font-medium">
                    {actionData?.message?.cons?.[0] ?? ""}
                  </span>
                </div>
              )}
          </div>
        </div>
        <div>
          <Label>
            Minat untuk Pelatihan (bisa pilih lebih dari satu)
            <span className="text-red-600"> *</span>
          </Label>
          <div className="md:p-5 p-4 mt-2 dark:bg-[#2A2A2A] bg-white rounded-lg border flex flex-col gap-5">
            {pros.map((pros, index) => (
              <div className="flex items-center gap-2" key={index}>
                <Checkbox
                  disabled={isSubmitting}
                  key={index}
                  id={pros}
                  name={pros}
                  value={pros}
                />
                <label htmlFor={pros} className="text-b8">
                  {pros}
                </label>
              </div>
            ))}
            {typeof actionData?.message === "object" &&
              "pros" in actionData.message && (
                <div className="flex gap-2 items-center text-error">
                  <TriangleAlert className="w-4" />
                  <span className="text-sm font-medium">
                    {actionData?.message?.pros?.[0] ?? ""}
                  </span>
                </div>
              )}
          </div>
        </div>
        <Button
          disabled={isSubmitting}
          type="submit"
          className="max-w-23 col-span-2 justify-self-end"
        >
          Masuk
        </Button>
      </Form>
    </section>
  );
};
