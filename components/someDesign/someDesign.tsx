import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

import AngoMinas from "@/public/assets/revista.png";
import Nota10 from "@/public/assets/nota.png";
import Digital from "@/public/assets/digital.png";
import Comenius from "@/public/assets/Dark Blue and Gold Modern Illustrative Happy New Year 2025 Instagram Post (3).png";

import { Brush } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const services = [
  {
    icon: Brush,
    title: "Revista Angola Minas",
    descritpion:
      "A *Revista Angola Minas* apresenta um design UI/UX moderno, otimizado para oferecer uma experiência intuitiva e agradável. Focamos em uma navegação fluida e visualmente atraente, permitindo aos usuários acessar informações sobre o setor de mineração em Angola de forma eficiente e interativa. O design foi pensado para facilitar o engajamento e a experiência do usuário.",
    image: AngoMinas,
  },
  {
    icon: Brush,
    title: "Nota 10",
    descritpion:
      "Nota 10 é uma aplicação que utiliza design UI/UX focado na experiência do usuário, oferecendo interfaces claras e fáceis de usar para estudantes, pais e professores. A navegação simples e a acessibilidade das informações sobre desempenho acadêmico, avaliações e faltas tornam a plataforma eficiente e agradável de usar. A experiência do usuário foi prioridade no desenvolvimento, garantindo interação intuitiva.",
    image: Nota10,
  },
  {
    icon: Brush,
    title: "Alçada Digital",
    descritpion:
      "Na Alçada Digital, aplicamos práticas de design UI/UX para criar soluções digitais inovadoras que atendem às necessidades dos nossos clientes. Com foco em usabilidade e estética, desenvolvemos softwares, websites e aplicativos móveis que oferecem experiências intuitivas e envolventes. A experiência do usuário é a chave para nossos designs, garantindo que cada interface seja funcional, acessível e agradável.",
    image: Digital,
  },
  {
    icon: Brush,
    title: "Comenius",
    descritpion:
      "A Comenius é uma plataforma de ensino online que foi desenvolvida com foco em design UI/UX, proporcionando uma navegação simples e eficiente. A interface intuitiva permite que estudantes e instrutores interajam de forma fluida, com acessibilidade e flexibilidade no gerenciamento de cursos online. A plataforma é projetada para oferecer uma experiência de aprendizado dinâmica e centrada no usuário, maximizando a interação e o engajamento.",
    image: Comenius,
  },
];

export function SomeDesign() {
  return (
    <Tabs defaultValue="UI/UX" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="UI/UX">UI/UX</TabsTrigger>
        <TabsTrigger className="md:hidden" value="design">
          Identidade Corporativa
        </TabsTrigger>
        <TabsTrigger className="hidden md:flex" value="design">
          Designers Corporativos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="UI/UX">
        <Card className="cursor-pointer">
          <CardHeader className="hidden md:flex items-end">
            <Button>Ver tudo</Button>
          </CardHeader>
          <CardContent className="space-y-2 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative h-48 md:h-80">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <service.icon size={32} className="mb-2" />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="">{service.descritpion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex md:hidden">
            <Button>Ver tudo</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="design">
        <Card className="cursor-pointer">
          <CardHeader className="hidden md:flex items-end">
            <Button>Ver tudo</Button>
          </CardHeader>
          <CardContent className="space-y-2 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/*  {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative h-48 md:h-80">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <service.icon size={32} className="mb-2" />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="">{service.descritpion}</p>
                  </CardContent>
                </Card>
              ))} */}
            </div>
          </CardContent>
          <CardFooter className="flex md:hidden">
            <Button>Ver tudo</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
