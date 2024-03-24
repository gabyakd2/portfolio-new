import React from "react";
import Image from "next/image";
import nexticon from "@/public/nexticon.png";
import reacticon from "@/public/reacticon.png";
import jsicon from "@/public/jsicon.png";
import tsicon from "@/public/tsicon.png";
import tailwindicon from "@/public/tailwindicon.png";
import nodeicon from "@/public/nodeicon.png";
import expressicon from "@/public/expressicon.png";
import sqlicon from "@/public/sqlicon.png";
import techs from "./techs.json"

function Technologies() {
  return (
    <div className="font-semibold">
      <p className="text-3xl text-white">Tecnologías</p>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10 text-greenpf text-xl">
        <div className="flex flex-col items-center">
          <Image
            className="bg-white rounded-full"
            src={nexticon}
            width={150}
            height={150}
            alt="next icon"
          />
          <p>Next Js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full"
            src={reacticon}
            width={150}
            height={150}
            alt="react icon"
          />
          <p>React Js</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={jsicon}
            width={150}
            height={150}
            alt="js icon"
          />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="p-2"
            src={tsicon}
            width={150}
            height={150}
            alt="ts icon"
          />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="p-10"
            src={tailwindicon}
            width={200}
            height={200}
            alt="tailwind icon"
          />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={nodeicon}
            width={150}
            height={150}
            alt="node icon"
          />
          <p>Node JS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={expressicon}
            width={150}
            height={150}
            alt="express icon"
          />
          <p>Express JS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={sqlicon}
            width={150}
            height={150}
            alt="sql icon"
          />
          <p>SQL</p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
