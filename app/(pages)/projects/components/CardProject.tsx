import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="text-white w-96 h-full flex flex-col justify-between">
      {/* <Image src="hola" width={150} height={150} alt="Image Project" /> */}
        <p className="text-2xl font-bold text-greenpf">{name}</p>
      <div className="mt-5">
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
      <Button asChild variant="secondary" size="lg">
        <Link href={repository}>Repositorio</Link>
      </Button>
    </div>
  );
}

export default CardProject;
