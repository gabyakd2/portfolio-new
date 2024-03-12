import Image from "next/image";
import React from "react";
import imageProf from "@/public/imgperfil.png";

function HeaderHome() {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row justify-around mt-28">
      <div>
        <h1 className="font-bold text-5xl">Gabriel Saldaña</h1>
        <p className="text-xl font-semibold">
          <span className="text-df2ef7">Frontend</span> Developer
        </p>
        <p className="w-3/4 mt-8 text-gray-400">
          Desarrollador frontend con alrededor de dos años de experiencia en el
          rubro. Busco oportunidades las cuales me permitan aprender, aplicar
          nuevos conocimientos, perfeccionar los que tengo y{" "}
          <span className="font-bold text-white">
            {" "}
            poder crecer profesional y personalmente.
          </span>{" "}
          Altamente resolutivo, adaptativo y comprometido.{" "}
          <span className="font-bold text-white">
            {" "}
            Disfruto mucho encontrar soluciones creativas y enfrentar nuevos
            desafíos.{" "}
          </span>
        </p>
      </div>
      <Image
        src={imageProf}
        width={180}
        height={150}
        alt="Imagen perfil"
        className="rounded-full"
      />
    </div>
  );
}

export default HeaderHome;
