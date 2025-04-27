import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { getAsset } from "~/lib/getAsset";

export default function LandingModule() {
  return (
    <div className="relative overflow-clip md:h-screen grow w-screen flex flex-col gap-4 justify-start items-start text-black md:px-10 lg:px-20 md:py-32">
      <img
        src={getAsset("/herolandingup.webp")}
        alt="Landing Hero"
        className="md:hidden w-full z-[1] -mt-7 sm:-mt-15 dark:hidden"
      />
      <img
        src={getAsset("/herolandingupdark.webp")}
        alt="Landing Hero"
        className="hidden w-full z-[1] -mt-7 sm:-mt-15 dark:max-md:flex"
      />
      <div className="z-10 flex flex-col gap-8 md:gap-7 lg:gap-10 items-center md:items-start justify-center md:w-[72%] lg:w-[73%] max-md:px-5 max-md:py-10">
        <div className="flex flex-col gap-5">
          <div className="font-suez text-h4 md:text-h3 lg:text-h2 xl:text-h1 text-center md:text-start text-black dark:text-white">
            Bangun masa depan pendidikan bersama{" "}
            <span className="text-yellow-500">Bina</span>
            <span className="text-tosca-500">Guru</span>
          </div>

          <div className="font-space text-s7 md:text-s6 lg:text-s5 xl:text-s4 text-center md:text-start text-black dark:text-white">
            BinaGuru hadir untuk mempercepat transformasi guru dengan teknologi,
            pelatihan berbasis AI, dan komunitas kolaboratif.
          </div>
        </div>

        <div className="flex flex-row gap-5 lg:gap-6">
          <Link to="/">
            <Button>Mulai Pelatihan</Button>
          </Link>
          <Link to="/tanya-ai">
            <Button variant={"secondary"}>Tanya AI</Button>
          </Link>
        </div>
      </div>

      <img
        src={getAsset("/herolandingdown.webp")}
        alt="Landing Hero"
        className="md:hidden w-full z-[1] -mb-8 sm:-mb-20 dark:hidden"
      />

      <img
        src={getAsset("/herolandingdowndark.webp")}
        alt="Landing Hero"
        className="w-full z-[1] -mb-8 sm:-mb-20 hidden dark:max-md:flex"
      />

      <img
        src={getAsset("/herolanding.webp")}
        alt="Landing Hero"
        className="hidden md:flex w-[55%] aspect-[768/692.14] absolute right-0 max-lg:translate-y-12 z-[1] dark:hidden"
      />

      <img
        src={getAsset("/herolandingdark.webp")}
        alt="Landing Hero"
        className="hidden w-[55%] aspect-[768/692.14] absolute right-0 max-lg:translate-y-12 z-[1] dark:max-md:hidden dark:md:flex"
      />
    </div>
  );
}
