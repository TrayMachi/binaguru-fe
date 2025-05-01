import { FileStack } from "lucide-react";
import { Form, useActionData, useNavigate, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import type { RPPAction } from "./action";
import { useEffect } from "react";
import { toast } from "~/hooks/use-toast";

export const RPPModule = () => {
  const actionData = useActionData<typeof RPPAction>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success) {
      toast({
        title: "RPP Berhasil Dibuat",
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
    <main className="flex flex-col mx-auto justify-center min-h-[90vh] gap-6 md:gap-9 w-fit px-10">
      <h1 className="md:text-h3 text-h6 font-suez text-center">
        Susun RPP Sesuai Kebutuhanmu Bersama
      </h1>
      <Form method="post" className="flex flex-col w-full">
        <Input
          id="title"
          type="text"
          name="title"
          disabled={isSubmitting}
          autoComplete="title"
          placeholder="Ketik judul dari RPP Anda di sini..."
          layout="w-full"
          error={
            typeof actionData?.message === "object" &&
            "title" in actionData.message
              ? actionData.message.title?.[0]
              : undefined
          }
        />
        <Textarea
          id="description"
          name="description"
          disabled={isSubmitting}
          autoComplete="description"
          placeholder="Ketik secara lengkap kebutuhan RPP yang Anda inginkan di sini..."
          layout="w-full md:mt-3 mt-1 mb-3 md:mb-5"
          className="resize-none h-[150px]"
          error={
            typeof actionData?.message === "object" &&
            "description" in actionData.message
              ? actionData.message.description?.[0]
              : undefined
          }
        />
        <div className="flex justify-between">
          <Button
            onClick={() => navigate("/rpp/koleksi")}
            variant={"secondary"}
          >
            <FileStack />
            Lihat Riwayat RPP Saya
          </Button>
          <Button type="submit">
            {isSubmitting ? "Sedang dibuat..." : "Buat RPP"}
          </Button>
        </div>
      </Form>
    </main>
  );
};
