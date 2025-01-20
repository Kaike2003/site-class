import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import image1 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.34.58.jpeg";
import image2 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00 (1).jpeg";
import image3 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00.jpeg";
import { Brush, Code, Share2 } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const services = [
  {
    icon: Code,
    title: "TypeScript",
    descritpion:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela foi construída em cima do JavaScript.",
    image: image3,
  },
  {
    icon: Share2,
    title: "TypeScript",
    descritpion:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela foi construída em cima do JavaScript.",
    image: image2,
  },
  {
    icon: Code,
    title: "TypeScript",
    descritpion:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela foi construída em cima do JavaScript.",
    image: image1,
  },
  {
    icon: Brush,
    title: "TypeScript",
    descritpion:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela foi construída em cima do JavaScript.",
    image: image3,
  },
  {
    icon: Code,
    title: "TypeScript",
    descritpion:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela foi construída em cima do JavaScript.",
    image: image2,
  },
  {
    icon: Brush,
    title: "TypeScript",
    descritpion:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela foi construída em cima do JavaScript.",
    image: image1,
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
          Designer de Identidade Corporativa
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
                    <p className="text-sm text-muted-foreground">{service.descritpion}</p>
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
                    <p className="text-sm text-muted-foreground">{service.descritpion}</p>
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
    </Tabs>
  );
}
