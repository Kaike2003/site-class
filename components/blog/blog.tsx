import image from "@/public/assets/fundoPrinciapl.jpeg";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

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
    image: image,
  },
  {
    key: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "21-08-2003",
    image: image,
  },
];

export default function Blog() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24" id="blog">
      <div className="container mx-auto px-4 flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore nosso Blog e fique por dentro das últimas novidades
          </h2>
          <p className="text-subtitle">
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
                    <p className="d">{p.description}</p>
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
