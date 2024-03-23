import React from "react";
import { HeaderHome, ButtonsNet } from "./components/header";
import {ListExperiences} from "./components/experiencies";
import {Technologies} from "./components/technologies";

function HomeMain() {
  return (
    <div>
      <HeaderHome />
      <ButtonsNet />
      <ListExperiences />
      <div className="border mt-20 mb-10"></div>
      <Technologies />
    </div>
  );
}

export default HomeMain;
