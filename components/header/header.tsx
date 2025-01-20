"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import logo from "@/public/assets/logo.png";
import WaveCurve from "../wavecurve/wavecurve";
import textHeader from "@/public/assets/textHeader.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-[300px] md:h-[500px] lg:h-[900px] w-full p-6 lg:px-24 lg:pt-[50px] bg-cover bg-[url('/assets/fundoPrinciapl.jpeg')] z-10 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent opacity-70 z-0"></div>

      <div className="w-full flex md:hidden items-center justify-between relative z-10 container mx-auto px-4">
        <Menu size={36} color="white" onClick={toggleMenu} className="cursor-pointer" />
        <Image className="w-[38px] h-[34px] bg-none" src={logo} alt="Imagem principal" />
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[250px] h-full bg-[#1a1a1a] text-white transition-transform duration-300 ease-in-out z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6">
          <Image className="w-[38px] h-[34px] mb-6" src={logo} alt="Logo" />
          <ul className="flex flex-col gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Sobre</li>
            <li className="cursor-pointer">Serviços</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contactos</li>
            <li className="flex items-center cursor-pointer">
              <Search className="mr-3" color="#C4CBCD" size={20} />
              <input type="text" placeholder="Pesquisar" className="w-full px-4 py-2 rounded-full text-black" />
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex container mx-auto px-4">
        <div className="w-full h-[84px] bg-[#FFFFFF66] rounded-full flex items-center justify-between px-12 z-50 relative backdrop-blur-[3px]">
          <Image className="w-[38px] h-[34px] bg-none z-10 cursor-pointer" src={logo} alt="Imagem principal" />
          <nav className="z-10 flex flex-row">
            <ul className="flex flex-row gap-[15px] items-center justify-center text-white cursor-pointer">
              <li>Home</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Blog</li>
              <li>Contactos</li>
              <li className="flex flex-row">
                <Search className="relative left-8 top-1" color="#C4CBCD" size={20} />
                <input type="text" placeholder="Pesquisar" className="rounded-full ps-10 h-[30px] text-black" />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="hidden md:flex w-full mt-[14%] z-50 container mx-auto px-4">
        <Image className="w-[491px] flex" src={textHeader} alt="Text Header" />
      </div>

      <WaveCurve />
    </div>
  );
}
