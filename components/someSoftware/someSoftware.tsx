import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import image1 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.34.58.jpeg";
import image2 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00 (1).jpeg";
import image3 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00.jpeg";
import { Brush, Code, Share2 } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento",
    text: "A Comenius é uma academia digital inovadora dedicada a transfomar a educação e o aprendizado online. Nossa missão é oferecer uma educação acessível, inclusiva e de alta qualidade para todos.",
    image: image3,
  },
  {
    icon: Share2,
    title: "Social Media",
    text: "A Comenius é uma academia digital inovadora dedicada a transfomar a educação e o aprendizado online. Nossa missão é oferecer uma educação acessível, inclusiva e de alta qualidade para todos.",
    image: image2,
  },
  {
    icon: Brush,
    title: "Design",
    text: "A Comenius é uma academia digital inovadora dedicada a transfomar a educação e o aprendizado online. Nossa missão é oferecer uma educação acessível, inclusiva e de alta qualidade para todos.",
    image: image1,
  },
];

export function SomeSoftWare() {
  return (
    <Tabs defaultValue="Sofwares" className="w-full">
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
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{service.text}</p>
                  </CardContent>
                  <CardFooter className="flex items-end justify-end">
                    <Button>Comenius</Button>
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
      <TabsContent value="Webistes">
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
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{service.text}</p>
                  </CardContent>
                  <CardFooter className="flex items-end justify-end">
                    <Button>Comenius</Button>
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
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{service.text}</p>
                  </CardContent>
                  <CardFooter className="flex items-end justify-end">
                    <Button>Comenius</Button>
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
    </Tabs>
  );
}
