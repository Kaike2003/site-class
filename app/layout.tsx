import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";


const barlow = Barlow({
  variable: "--font-barlow-mono",
  weight: ["200", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alçada Digital",
  description:
    "Alçada Digital é uma agência ou estúdio especializado em soluções criativas e inovadoras no universo digital. Com uma abordagem focada em transformar ideias em experiências impactantes, a Alçada Digital oferece serviços de design, desenvolvimento web e estratégias de branding para marcas que desejam se destacar no ambiente online. A equipe é comprometida em proporcionar resultados de alta qualidade, alinhando tecnologia e design para construir identidades digitais sólidas e funcionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable}  antialiased font-barlow`}>{children}</body>
    </html>
  );
}
