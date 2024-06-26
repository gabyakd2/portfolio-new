import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDesk from "./components/NavbarDesk";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio Gabriel Saldaña",
  description: "Portafolio realizado con Next js y Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl mx-auto px-8">
          <NavbarDesk />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
