import { TabsSpeak } from "../tabs/speak/tabs.speak";

export default function Speak() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale Conosco</h2>
          <p className="text-lg text-muted-foreground">Envie uma mensagem e fale conosco</p>
        </div>
        <div className="flex w-full flex-col">
          <div className="w-full flex flex-col-reverse gap-6">
            <div className="relative h-56 sm:h-80 md:h-[400px] lg:h-[500px]">{"adicionar aqui o mapa"}</div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Pronto para trnasformar suas ideias em soluções digitais?</p>
              <p className="text-[#6E6E6E]">
                Na Classicus Digital, estamos aqui para ajudar você a dar o próximo passo. Seja para desenvolver um novo
                site, criar um aplicativo móvel, ou reformular a identidade visual da sua marca, nossa equipe está à
                disposição para entender suas necessidades e oferecer a melhor solução personalizada. Entre em contato
                conosco e fale com um especialista! Estamos ansiosos para conhecer seu projeto e colaborar na criação de
                algo incrível.
              </p>
              <p className="font-bold">
                Preencha o formulário ao lado ou envie-nos uma mensagem diretamente. Vamos juntos levar sua empresa ao
                próximo nível!
              </p>
            </div>
          </div>
          <div className="w-full mt-4 space-y-2 flex flex-col gap-20 items-center justify-center">
            <TabsSpeak />
          </div>
        </div>
      </div>
    </section>
  );
}
