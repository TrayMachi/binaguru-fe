import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { getAsset } from "~/lib/getAsset";

export default function ProfileModule() {
  return (
    <div className="relative overflow-clip h-fit min-h-screen grow w-screen flex flex-col gap-6 md:gap-7 lg:gap-8 justify-start items-start">
      <div className="w-full flex flex-col gap-8 z-10 justify-end items-end text-black dark:text-white px-5 py-8 md:px-10 md:py-14 lg:px-20 lg:py-20">
        <div className="flex flex-col xl:flex-row gap-8 w-full">
          <div className="flex flex-col gap-5 px-7 lg:px-7 lg:py-3 xl:p-7 items-center justify-center">
            <div className="w-28 h-28 overflow-hidden z-10">
              <img
                src={getAsset("/profile.webp")}
                alt="profile"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 w-full text-center">
              <div className="font-suez text-h6">Aileen Josephine</div>
              <div className="font-space text-b7">
                aileenjosephine@gmail.com
              </div>
            </div>
          </div>

          <div className="w-full p-6 md:p-11 bg-white dark:bg-black rounded-[16px] shadow-md flex flex-col lg:flex-row justify-between gap-6 md:gap-7">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-row justify-between items-center">
                <div className="font-space text-b8 md:text-b7 text-[#888888]">Lokasi</div>
                <div className="font-space text-s8 md:text-s7">Jakarta</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="font-space text-b8 md:text-b7 text-[#888888]">
                  Tanggal Lahir
                </div>
                <div className="font-space text-s8 md:text-s7">02/07/2005</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="font-space text-b8 md:text-b7 text-[#888888]">
                  Pengalaman Mengajar
                </div>
                <div className="font-space text-s8 md:text-s7">5 tahun</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="font-space text-b8 md:text-b7 text-[#888888]">
                  Jenjang yang Diajarkan
                </div>
                <div className="font-space text-s8 md:text-s7">SMA</div>
              </div>
            </div>

            <div className="w-full h-[1pt] lg:w-[1pt] bg-border xl:h-full" />

            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col justify-between items-start">
                <div className="font-space text-b8 md:text-b7 text-[#888888]">
                  Kendala dalam Mengajar
                </div>
                <div className="font-space text-s8 md:text-s7">
                  Akses ke materi, teknolog & infrastruktur, pembelajaran jarak
                  jauh
                </div>
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="font-space text-b8 md:text-b7 text-[#888888]">
                  Minat untuk Pelatihan
                </div>
                <div className="font-space text-s8 md:text-s7">
                  Pengelolaan kelas, pembelajaran daring, teknologi dalam
                  pendidikan
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button variant="ghost">Edit Profile</Button>
      </div>

      <div className="w-full h-fit overflow-hidden z-1 absolute bottom-0 left-0">
        <img
          src={getAsset("/profilebgmobile.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top dark:hidden md:hidden"
        />
        <img
          src={getAsset("/profilebgmobiledark.webp")}
          alt="halo"
          className="w-full h-full object-cover object-top hidden max-md:dark:block"
        />
        <img
          src={getAsset("/profilebg.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top dark:hidden max-md:hidden"
        />
        <img
          src={getAsset("/profilebgdark.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top hidden md:dark:block"
        />
      </div>
    </div>
  );
}
