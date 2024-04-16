import React from "react";
import PersonalInf from "./components/PersonalInf";
import Image from "next/image";
import imageme from "@/public/yo.png";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";

function AboutMePage() {
  return (
    <div>
      <div className="flex justify-between mt-5">
        <p className="font-bold text-5xl my-10 text-white">Acerca de mí</p>
        <Image
          src={imageme}
          width={150}
          height={150}
          alt="yo"
          className="rounded-lg"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <PersonalInf />
        <Education />
        <Hobbies />
      </div>
    </div>
  );
}

export default AboutMePage;
