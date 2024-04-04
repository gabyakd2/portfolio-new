import Image from "next/image";
import React from "react";

interface IPropsCard {
  name: string;
  description: string;
  technologies: string[];
  repository: string;
}

function CardProject({
  name,
  description,
  technologies,
  repository,
}: IPropsCard) {
  return (
    <div className="text-white w-96">
      {/* <Image src="hola" width={150} height={150} alt="Image Project" /> */}
      <p className="text-2xl font-bold text-greenpf">{name}</p>
      <p>{description}</p>
      <div className="my-5">
        <p>
          <span className="font-bold"> Tecnologías: </span>
          {technologies.map((tech: string) => (
            <>{tech}</>
          ))}
        </p>
      </div>
    </div>
  );
}

export default CardProject;
