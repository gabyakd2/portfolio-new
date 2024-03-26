import React from "react";
import { HeaderHome, ButtonsNet } from "./components/header";
import {ListExperiences} from "./components/experiencies";
import {Technologies} from "./components/technologies";
import { Contact } from "./components/contact";

function HomeMain() {
  return (
    <div>
      <HeaderHome />
      <ButtonsNet />
      <ListExperiences />
      <div className="border mt-20 mb-10"></div>
      <Technologies />
      <div className="border mt-20 mb-10"></div>
      <Contact />
    </div>
  );
}

export default HomeMain;
