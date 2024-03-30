import Image from "next/image";
import React from "react";

function CardProject() {
  return (
    <div className="text-white w-96">
      {/* <Image src="hola" width={150} height={150} alt="Image Project" /> */}
      <p className="text-2xl font-bold text-greenpf">Titulo proyecto</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        repellendus sequi iste voluptates repudiandae exercitationem quibusdam
        odit at sapiente? Aliquid fuga necessitatibus qui totam, vitae velit
        maiores laudantium suscipit nostrum.
      </p>
    </div>
  );
}

export default CardProject;
