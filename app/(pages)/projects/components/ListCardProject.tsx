import React from "react";
import CardProject from "./CardProject";
import projects from "../../../project.json"
import { Project } from "../type";

function ListCardProject() {
  return (
    <div className="grid grid-cols-2">
      {
        projects.projectsList.map(({id, name, description, technologies, repository}: Project) => (
          <div key={id} className="my-5">
            <CardProject name={name} description={description} technologies={technologies} repository={repository}/>
          </div>
        ))
      }
    </div>
  );
}

export default ListCardProject;
