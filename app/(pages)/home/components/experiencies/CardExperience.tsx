import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  company: string;
  position: string;
  time: string;
  description: string[];
  skills: string[];
}

function CardExperience({
  company,
  position,
  time,
  description,
  skills,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{company}</CardTitle>
        <CardDescription>{position}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{time}</p>
      </CardContent>
      <CardFooter>
        <ul>
          {description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </CardFooter>
      <CardFooter>
        <p>
          <span className="font-bold"> Tecnologías: </span>{skills}
        </p>
      </CardFooter>
    </Card>
  );
}

export default CardExperience;
