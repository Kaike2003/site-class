"use client";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-[#ff9900] bg-opacity-40 px-10 pt-12 pb-6">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-14" />
          </Link>
          <div className="mt-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              Alçada Digital é uma plataforma de soluções digitais que oferece ferramentas inovadoras para
              desenvolvimento de software, design UI/UX, criação de aplicativos móveis e gestão de mídias sociais. Ela
              busca otimizar processos empresariais, melhorando a experiência do usuário e a eficiência nas operações.
            </p>
          </div>
          <ul className="mt-10 flex space-x-5">
            <li>
              <SocialIcon
                className="cursor-pointer"
                network="facebook"
                bgColor="#000"
                url="https://www.facebook.com/alcadadigital"
              />
            </li>
            <li>
              <SocialIcon
                className="cursor-pointer"
                network="instagram"
                bgColor="#000"
                url="https://www.facebook.com/alcadadigital"
              />
            </li>
            <li>
              <SocialIcon
                className="cursor-pointer"
                network="whatsapp"
                bgColor="#000"
                url="https://www.facebook.com/alcadadigital"
              />
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Services</h4>

          <ul className="mt-6 space-y-4">
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Web Development
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Pricing
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Support
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Client Portal
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Resources
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Platforms</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Hubspot
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Integration Services
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Marketing Glossar
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                UIPath
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Company</h4>

          <ul className="space-y-4 mt-6">
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                About us
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Careers
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Blog
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Portfolio
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Events
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Additional</h4>

          <ul className="space-y-4 mt-6">
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                FAQ
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Partners
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Sitemap
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
                News
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-10 mb-6 border-gray-300" />

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
              Security
            </a>
          </li>
        </ul>

        <p className="text-gray-600 text-sm md:ml-auto">© @CLASSICUS. All rights reserved.</p>
      </div>
    </footer>
  );
}
