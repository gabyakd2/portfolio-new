import React from "react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch"


function NavbarDesk() {
  return (
    <nav className="py-6 border-b border-solid flex justify-between">
      <div className="font-semibold space-x-3 flex text-white">
        <Link href="/">Inicio</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/about-me">Acerca de mí</Link>
      </div>
      <Switch />
    </nav>
  );
}

export default NavbarDesk;
