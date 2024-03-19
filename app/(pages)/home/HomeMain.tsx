import React from "react";
import HeaderHome from "./components/HeaderHome";
import ButtonsNet from "./components/ButtonsNet";
import ListExperiences from "./components/ListExperiences";
import Technologies from "./components/Technologies";

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
