"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";

function NavbarDesk() {
  const pathname = usePathname()
  return (
    <nav className="py-6 border-b border-solid flex justify-between">
      <div className="font-semibold space-x-8 flex text-white">
        <Link href="/" className={pathname === "/" ? "text-greenpf font-extrabold": "" }>Inicio</Link>
        <Link href="/projects" className={pathname === "/projects" ? "text-greenpf font-extrabold": ""}>Proyectos</Link>
        <Link href="/aboutme" className={pathname === "aboutme" ? "text-greenpf font-extrabold": "" }>Acerca de mí</Link>
      </div>
      <div className="flex space-x-3 items-center">
        <FaMoon style={{ color: "white", fontSize: "1em" }} />
        <Switch />
        <FaSun style={{ color: "white", fontSize: "1em" }}/>
      </div>
    </nav>
  );
}

export default NavbarDesk;
