import React from "react";
import CardProject from "./CardProject";
import {projectsList} from "@/app/project.json"
import { ProjectRoot, Project } from "../type";

function ListCardProject() {
  return (
    <>
      {
        projectsList.map(({name, description, technologies, repository}: Project) => (
          <div>
            <CardProject name={name} description={description} technologies={technologies} repository={repository}/>
          </div>
        ))
      }
    </>
  );
}

export default ListCardProject;
