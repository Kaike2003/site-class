import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import AngoMinas from "@/public/assets/revista.png";
import Nota10 from "@/public/assets/nota.png";
import Digital from "@/public/assets/digital.png";
import Comenius from "@/public/assets/Dark Blue and Gold Modern Illustrative Happy New Year 2025 Instagram Post (3).png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* const services = [
 
    
    {
    icon: Code,
    title: "Desenvolvimento",
    text: "A Alçada Digital é uma academia digital inovadora dedicada a transfomar a educação e o aprendizado online. Nossa missão é oferecer uma educação acessível, inclusiva e de alta qualidade para todos.",
    image: image3,
  },
  {
    icon: Share2,
    title: "Social Media",
    text: "A Alçada Digital é uma academia digital inovadora dedicada a transfomar a educação e o aprendizado online. Nossa missão é oferecer uma educação acessível, inclusiva e de alta qualidade para todos.",
    image: image2,
  },
  {
    icon: Brush,
    title: "Design",
    text: "A Alçada Digital é uma academia digital inovadora dedicada a transfomar a educação e o aprendizado online. Nossa missão é oferecer uma educação acessível, inclusiva e de alta qualidade para todos.",
    image: image1,
  },
  },
];
    */

const websites = [
  {
    title: "Revista Angola Minas",
    text: "A *Revista Angola Minas* é uma plataforma que oferece informações sobre o setor de mineração em Angola. Cobre temas como desenvolvimento da indústria mineral, investimentos, sustentabilidade e políticas públicas, destacando o potencial do país no mercado global. A revista visa promover o conhecimento e atrair investidores, sendo voltada para profissionais e interessados no setor.",
    image: AngoMinas,
    url: "https://revistaangolaminas.ao/pt",
  },
  {
    title: "Nota 10",
    text: "Nota 10 é uma aplicação que acompanha o desempenho acadêmico, comportamental e de frequência de estudantes. Pais e professores podem acessar informações sobre notas, avaliações e faltas, com notificações em tempo real. Seu objetivo é melhorar a comunicação entre escola e família, garantindo uma gestão eficiente e centralizada das informações escolares.",
    image: Nota10,
    url: "",
  },
  {
    title: "Alçada Digital",
    text: "Transformamos ideias em soluções digitais inovadoras. Na Alçada Digital, combinamos criatividade e tecnologia para criar softwares, websites, aplicativos móveis e designs de identidade visual que impulsionam o sucesso de nossos clientes. Oferecemos desenvolvimento de software, design UI/UX, aplicativos móveis, gestão de social media e soluções personalizadas para cada necessidade.",
    image: Digital,
    url: "",
  },
  {
    title: "Comenius",
    text: "A Comenius é uma aplicação de ensino online inovadora, projetada para oferecer uma experiência personalizada e acessível a estudantes, instrutores e instituições educacionais. Com uma interface moderna e intuitiva, a Comenius permite criar, gerenciar e acessar cursos online em diversas áreas do conhecimento. A plataforma promove aprendizado de qualidade, interação dinâmica e flexibilidade, atendendo às necessidades de todos os usuários.",
    image: Comenius,
    url: "",
  },
];

export function SomeSoftWare() {
  return (
    <Tabs defaultValue="Webistes" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Sofwares">Sofwares</TabsTrigger>
        <TabsTrigger value="Webistes">Webistes</TabsTrigger>
        <TabsTrigger value="aplicativoMoveis">Mobile</TabsTrigger>
      </TabsList>
      <TabsContent value="Sofwares">
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
                  </div>
                  <CardContent className="p-4">
                    <p className="">{service.text}</p>
                  </CardContent>
                  <CardFooter className="flex items-end justify-end">
                    <Button>Alçada Digital</Button>
                  </CardFooter>
                </Card>
              ))} */}
            </div>
          </CardContent>
          <CardFooter className="flex md:hidden">
            <Button>Ver tudo</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Webistes">
        <Card className="cursor-pointer">
          <CardHeader className="hidden md:flex items-end">
            <Button>Ver tudo</Button>
          </CardHeader>
          <CardContent className="space-y-2 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
                  onClick={() => {
                    if (service.url === "") {
                    } else {
                      window.open(service.url, "_blank");
                    }
                  }}
                >
                  <div className="relative h-48 md:h-80">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="">{service.text}</p>
                  </CardContent>
                  <CardFooter className="flex items-end justify-end">
                    <Button>{service.title}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex md:hidden">
            <Button>Ver tudo</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="aplicativoMoveis">
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
                  </div>
                  <CardContent className="p-4">
                    <p className="">{service.text}</p>
                  </CardContent>
                  <CardFooter className="flex items-end justify-end">
                    <Button>Alçada Digital</Button>
                  </CardFooter>
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
