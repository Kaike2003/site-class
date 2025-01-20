"use client";

import { SomeSoftWare } from "../someSoftware/someSoftware";

export default function Software() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça alguns dos softwares, Websites e aplicativos móveis desenvolvidos por nós
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvemos softwares, Websites e aplicativos móveis sob medita, nosso compromisso é com a satisfação dos
            nossos clientes
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <SomeSoftWare />
      </div>
    </section>
  );
}
