import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Eye, Goal, Globe } from "lucide-react";
import Visao from "@/public/assets/visao.jpg";
import Missao from "@/public/assets/missao.jpg";
import Valores from "@/public/assets/valores.jpg";

const special = [
  {
    icon: Eye,
    title: "Visão",
    description:
      "Oferecer soluções digitais inovadoras e personalizadas que impulsionem o crescimento dos nossos clientes, transformando ideias em realidades tecnológicas por meio de design inteligente, desenvolvimento ágil e excelência em experiência do usuário.",
    image: Visao,
  },
  {
    icon: Goal,
    title: "Missão",
    description:
      "Ser reconhecida como uma empresa líder no desenvolvimento de soluções digitais, criando tecnologias que impactem positivamente negócios e pessoas, tornando-se referência em qualidade, inovação e atendimento no mercado global.",
    image: Missao,
  },
  {
    icon: Globe,
    title: "Valores",
    description:
      "Buscamos constantemente novas ideias e tecnologias para entregar soluções eficientes e criativas aos nossos clientes, e valorizamos o aprendizado constante e o desenvolvimento profissional de nossa equipe, para nos mantermos à frente no mercado.",
    image: Valores,
  },
];

export default function About() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24" id="sobrenos">
      <div className="container mx-auto px-4 flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre nós</h2>
          <p className="text-subtitle">
            Somos apaixonados por compartilhar conhecimento sobre as últimas tendências tecnológicas. Nossa missão é
            fornecer conteúdos de qualidade que ajudem você a se manter à frente no mundo da inovação.
          </p>
        </div>
        <div className="flex w-full flex-col">
          <div className="w-full mt-4 space-y-2 p-6 flex flex-col gap-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {special.map((p, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-48 md:h-80">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Image
                      src={p.image}
                      alt={p.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p.icon size={32} className="mb-2" />
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
