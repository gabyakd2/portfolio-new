import React from "react";
import experiences from "../../../../mockExperiende.json";
import CardExperience from "./CardExperience";

interface IExperiences {
  company: string;
  position: string;
  time: string;
  description: string;
  skills: string[];
  image?: string;
}

function ListExperiences() {
  return (
    <div className="mt-20">
      <h3 className="text-3xl text-white font-semibold mb-10">Experiencias</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {experiences.map(({ company, position, time, description, skills }) => (
          <div key={company}>
            <CardExperience
              company={company}
              position={position}
              time={time}
              description={description}
              skills={skills}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListExperiences;
