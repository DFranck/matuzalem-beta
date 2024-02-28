import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/Button";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import { LayoutGridDemo } from "@/components/ui/LayoutGridDemo";
import { SparklesPreview } from "@/components/ui/SparklePreview";
import Image from "next/image";
import Matuzalem from "../public/mathusalem-lancien-plus-vieil-arbre-du-monde-1 1.png";
export default function Home() {
  return (
    <main>
      <Nav />
      <header>
        <SparklesPreview />
        <h2 className="absolute text-2xl font-semibold top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2  text-zinc-400 text-center w-[60%] ">
          Plateforme analytique et de gestion environnementale dédiée à la
          promotion et à la sauvegarde du patrimoine arboré, avec un accent
          particulier sur la transparence et l&apos;engagement communautaire et
          d&apos;entreprise dans les efforts de conservation.
        </h2>
        <Image
          src={Matuzalem}
          alt="Matuzalem"
          className="opacity-5 absolute top-0 left-0 w-full h-full object-cover object-center"
        />
        <Button
          variant={"matuzalem"}
          size={"lg"}
          className=" absolute  top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          En savoir plus
        </Button>
      </header>
      <section>
        <LayoutGridDemo />
      </section>
      <section className="bg-black">
        <CardHoverEffectDemo />
      </section>
    </main>
  );
}
