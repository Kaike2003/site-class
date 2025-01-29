import About from "@/components/about/about";
import BriefPresentation from "@/components/briefPresentation/briefPresentation";
import { CaroucelIcons } from "@/components/caroucelIcons/caroucelIcons";
import Design from "@/components/design/desgin";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Service from "@/components/services/services";
import Software from "@/components/software/software";
import Speak from "@/components/speak/speak";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col  lg:px-24 p-6">
        <CaroucelIcons />
        <BriefPresentation />
        <Service />
        <Software />
        <Design />
        {/* <SocialMedia /> */}
        {/* <Blog /> */}
        <About />
        <Speak />
      </div>
      <Footer />
    </div>
  );
}
