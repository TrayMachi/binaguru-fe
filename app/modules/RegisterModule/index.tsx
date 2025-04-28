import { getAsset } from "~/lib/getAsset"
import { RegisterForm } from "./sections/RegisterForm"

export const RegisterModule = () => {
  return (
    <main className="lg:flex">
      <img src={getAsset("BgRegis.webp")} className="max-lg:hidden max-w-1/3" />
      <img src={getAsset("BgRegisMob.webp")} className="lg:hidden w-screen -translate-y-3" />
      <RegisterForm />
    </main>
  )
}
