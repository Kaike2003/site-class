import Image from "next/image";
import image1 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.34.58.jpeg";
import image2 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00 (1).jpeg";
import image3 from "@/public/assets/WhatsApp Image 2025-01-12 at 11.35.00.jpeg";
import { Brush, Code, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento",
    text: "Softwares, websites e aplicativos móveis",
    image: image3,
  },
  {
    icon: Share2,
    title: "Social Media",
    text: "Gerenciamento de mídias sociais",
    image: image2,
  },
  {
    icon: Brush,
    title: "Design",
    text: "Identidade Visual e UI/UX",
    image: image1,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground">Soluções personalizadas para impulsionar seu negócio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
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
                <p className="text-sm text-muted-foreground">{service.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
