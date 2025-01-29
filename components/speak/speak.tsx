import { TabsSpeak } from "../tabs/speak/tabs.speak";

export default function Speak() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale Conosco</h2>
          <p className="text-subtitle">Envie uma mensagem e fale conosco</p>
        </div>
        <div className="flex w-full flex-col">
          <div className="w-full flex flex-col-reverse gap-6">
            <div className="relative h-56 sm:h-80 md:h-[400px] lg:h-[500px]">
              {/* Mapa incorporado com as coordenadas fornecidas */}
              <iframe
                src="https://www.google.com/maps/place/PEP+Angola+Luanda+Palanca/@-8.8446628,13.2987287,13.91z/data=!4m6!3m5!1s0x1a51f1bee629f7d3:0x845b8b6885d5634!8m2!3d-8.84841!4d13.2819584!16s%2Fg%2F11fq1p48kh?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Pronto para transformar suas ideias em soluções digitais?</p>
              <p className="text-[#6E6E6E]">
                Na Alçada Digital, estamos aqui para ajudar você a dar o próximo passo. Seja para desenvolver um novo
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
