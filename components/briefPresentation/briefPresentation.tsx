import Image from "next/image";
import { Button } from "@/components/ui/button";
import fundo from "@/public/assets/fundoPrinciapl.jpeg";
import Link from "next/link";

export default function BriefPresentation() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Transformando Ideias em Soluções Digitais Inovadoras
            </h2>
            <p className="text-black">
              Na Alçada Digital, combinamos criatividade e tecnologia para desenvolver softwares, websites, aplicativos
              móveis e designs de identidade visual que impulsionam o sucesso dos nossos clientes.
            </p>
            <ul className="space-y-2">
              {["Desenvolvimento de Software", "Design UI/UX", "Aplicativos Móveis", "Social Media"].map(
                (service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{service}</span>
                  </li>
                )
              )}
            </ul>

            <Link href={"#servicos"} className="flex">
              <Button size="lg">Conheça Nossos Serviços</Button>
            </Link>
          </div>
          <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={fundo}
              alt="Alçada Digital Showcase"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
