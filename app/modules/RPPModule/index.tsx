import { FileStack } from "lucide-react";
import { Form, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export const RPPModule = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <main className="flex flex-col mx-auto justify-center min-h-[90vh] gap-9 w-fit">
      <h1 className="text-h3 font-suez text-center">
        Susun RPP Sesuai Kebutuhanmu Bersama
      </h1>
      <Form method="post" className="flex flex-col gap-5 w-full">
        <Input
          id="title"
          type="text"
          name="title"
          disabled={isSubmitting}
          autoComplete="title"
          placeholder="Ketik judul dari RPP Anda di sini..."
          layout="w-full"
        />
        <Textarea
          id="description"
          name="description"
          disabled={isSubmitting}
          autoComplete="description"
          placeholder="Ketik secara lengkap kebutuhan RPP yang Anda inginkan di sini..."
          layout="w-full"
          className="resize-none h-[150px]"
        />
        <div className="flex justify-between">
          <Button variant={"secondary"}>
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
