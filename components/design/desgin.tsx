"use client";

import { SomeDesign } from "../someDesign/someDesign";

export default function Design() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça alguns dos Designers de identidade corporativa e IU/UX desenvolvidos por nós
          </h2>
          <p className="text-subtitle">
            Criação de identidade corporativa, UI/UX sob demanda, nosso compromisso é com a satisfação dos nossos
            clientes
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <SomeDesign />
      </div>
    </section>
  );
}
