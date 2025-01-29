"use client";

import { Button } from "../ui/button";
import image from "@/public/assets/fundoPrinciapl.jpeg";
import Image from "next/image";
import image2 from "@/public/assets/valores.jpg";
import image3 from "@/public/assets/valores.jpg";
import image4 from "@/public/assets/valores.jpg";

export default function SocialMedia() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Social mídia manager</h2>
          <p className="text-subtitle">Gestão de Redes sociais, Marketing Digital e Branding</p>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col gap-2">
        <div className="w-full flex items-end justify-end mb-6">
          <Button variant={"default"}>Ver tudo</Button>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4 h-[250px] md:h-[350px]">
          <div className="row-span-3 col-span-2 relative">
            <Image src={image} alt="Imagem 1" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="row-span-3 relative">
            <Image src={image2} alt="Imagem 2" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4 h-[250px] md:h-[350px]">
          <div className="row-span-3 relative">
            <Image src={image3} alt="Imagem 3" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="row-span-3 col-span-2 relative">
            <Image src={image4} alt="Imagem 4" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
