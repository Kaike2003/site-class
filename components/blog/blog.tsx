import image from "@/public/assets/fundoPrinciapl.jpeg";
import Image from "next/image";
import image2 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00.jpeg";
import image3 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00 (1).jpeg";
import image4 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.34.58.jpeg";
import { Card, CardContent } from "../ui/card";
import { Eye, Goal, Globe } from "lucide-react";

const element = [
  {
    key: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "21-08-2003",
    image,
  },
  {
    key: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "21-08-2003",
    image: image2,
  },
  {
    key: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "21-08-2003",
    image: image3,
  },
  {
    key: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "21-08-2003",
    image: image4,
  },
];

const special = [
  {
    icon: Eye,
    title: "Visão",
    description:
      "Oferecer soluções digitais inovadoras e personalizadas que impulsionem o crescimento dos nossos clientes, transformando ideias em realidades tecnológicas por meio de design inteligente, desenvolvimento ágil e excelência em experiência do usuário.",
  },
  {
    icon: Goal,
    title: "Missão",
    description:
      "Ser reconhecida como uma empresa líder no desenvolvimento de soluções digitais, criando tecnologias que impactem positivamente negócios e pessoas, tornando-se referência em qualidade, inovação e atendimento no mercado global.",
  },
  {
    icon: Globe,
    title: "Valores",
    description:
      "Buscamos constantemente novas ideias e tecnologias para entregar soluções eficientes e criativas aos nossos clientes, e valorizamos o aprendizado constante e o desenvolvimento profissional de nossa equipe, para nos mantermos à frente no mercado.",
  },
];

export default function Blog() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore nosso Blog e fique por dentro das últimas novidades
          </h2>
          <p className="text-lg text-muted-foreground">
            Aqui você encontra artigos, dicas e insights sobre tecnologia, inovação e muito mais. Acompanhe nossos
            conteúdos e se atualize com as tendências do mercado.
          </p>
        </div>
        <div className="flex w-full flex-col">
          <div className="w-full flex flex-col gap-6">
            <div className="relative h-56 sm:h-80 md:h-[400px] lg:h-[500px]">
              <Image
                src={image}
                alt="Imagem principal do blog"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold">1 Month Ago</p>
              <p className="font-bold">Tick one More destination off of your</p>
              <p className="text-[#6E6E6E]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam a natus atque ea molestiae
                placeat explicabo velit eaque aperiam.
              </p>
            </div>
          </div>
          <div className="w-full mt-4 space-y-2 p-6 flex flex-col gap-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {element.map((p) => (
                <Card
                  key={p.key}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-48 md:h-80">
                    <Image
                      src={p.image}
                      alt={p.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {special.map((p, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-48 md:h-80">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Image
                      src={image}
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
                    <p className="text-sm text-muted-foreground">{p.description}</p>
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
