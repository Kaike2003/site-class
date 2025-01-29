"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import WaveCurve from "../wavecurve/wavecurve";
import logo from "@/public/assets/logo.png";
import alcadaDigita from "@/public/assets/alcadaDigita.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const backgroundImages = useMemo(
    () => ["/assets/fundoPrinciapl.webp", "/assets/ux-ui.webp", "/assets/developer.webp"],
    []
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <div className="h-[300px] md:h-[500px] lg:h-[900px] w-full p-6 lg:px-24 lg:pt-[50px] bg-cover z-10 relative transition-all duration-1000 ease-in-out">
      <Image
        src={backgroundImages[currentImageIndex] || "/placeholder.svg"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={currentImageIndex === 0}
        loading={currentImageIndex === 0 ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent opacity-70 z-0"></div>

      <div className="w-full flex lg:hidden items-center justify-between relative z-10 container mx-auto px-4">
        <Menu size={36} color="white" onClick={toggleMenu} className="cursor-pointer" />
        <Image width={38} height={34} src={logo || "/placeholder.svg"} alt="Logo" className="bg-none" />
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[250px] h-full bg-[#1a1a1a] text-white transition-transform duration-300 ease-in-out z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6">
          <Image className="w-[38px] h-[34px] mb-6" src={logo || "/placeholder.svg"} alt="Logo" />
          <ul className="flex flex-col gap-6">
            <Link href={"#home"}>
              <li>Página Inicial</li>
            </Link>
            <Link href={"#servicos"}>
              <li>Serviços</li>
            </Link>
            <Link href={"#academia"}>
              <li>Academia</li>
            </Link>
            <Link href={"#academia"}>
              <li>Softwares</li>
            </Link>
            <Link href={"#blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"#sobrenos"}>
              <li>Sobre nós</li>
            </Link>
            <li className="flex items-center justify-center cursor-pointer">
              <Search className="mr-3" color="#C4CBCD" size={20} />
              <input
                type="text"
                placeholder="Pesquisar"
                className="w-full px-4 py-2 rounded-full text-black justify-center"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex container mx-auto px-4">
        <div className="w-full h-[84px] bg-[#FFFFFF66] rounded-full flex items-center justify-between px-12 z-50 relative backdrop-blur-[3px]">
          <Image
            width={38}
            height={34}
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className="bg-none z-10 cursor-pointer"
          />
          <nav className="z-10 flex flex-row">
            <ul className="flex flex-row gap-[15px] items-center justify-center text-white cursor-pointer">
              <Link href={"#home"}>
                <li>Página Inicial</li>
              </Link>
              <Link href={"#servicos"}>
                <li>Serviços</li>
              </Link>
              <Link href={"#academia"}>
                <li>Academia</li>
              </Link>
              <Link href={"#academia"}>
                <li>Softwares</li>
              </Link>
              <Link href={"#blog"}>
                <li>Blog</li>
              </Link>
              <Link href={"#sobrenos"}>
                <li>Sobre nós</li>
              </Link>
              <li className="flex flex-row items-center justify-center">
                <Search className="relative left-8" color="#C4CBCD" size={20} />
                <input type="text" placeholder="Pesquisar" className="rounded-full ps-10 h-[30px] text-black" />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative md:flex w-full mt-[16%] z-10 container mx-auto px-4">
        <Image className="w-[20%] md:w-[10%] flex" src={alcadaDigita || "/placeholder.svg"} alt="Text Header" />
      </div>

      <WaveCurve />
    </div>
  );
}
