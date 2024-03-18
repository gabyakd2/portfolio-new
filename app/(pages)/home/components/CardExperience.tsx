import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardExperience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dinamo IT</CardTitle>
        <CardDescription>Frontend Developer</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Abril 2023 - Actualidad</p>
      </CardContent>
      <CardFooter>
        <ul>
          <li>• Desarrollo de diversas funcionalidades y características utilizando tecnologías frontend como Next Js, CSS, JavaScript, Tailwind.</li>
          <li>• Trabajé en la implementación de condiciones y lógica para garantizar el correcto funcionamiento de las funcionalidades.</li>
          <li>• Trabajé en estrecha colaboración con el equipo de desarrollo, diseñadores y otros miembros del proyecto para alcanzar los objetivos establecidos.</li>
          <li>• Asignar tareas y responsabilidades a los miembros del equipo.</li>
        </ul>
      </CardFooter>
    </Card>
  );
}

export default CardExperience;
