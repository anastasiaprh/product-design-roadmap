import React from "react";

import ProductThinkingBlock from "../components/ProductThinkingBlock";
import classes from "./MainContainer.module.css";
import Lines from "../components/Lines";
import boxesData from "../boxesData";
import ResearchBlock from "../components/ResearchBlock";
import UserExperienceBlock from "../components/UserExperienceBlock";
import UserInterfaceBlock from "../components/UserInterfaceBlock";
import CommunicationBlock from "../components/CommunicationBlock";

const MainContainer = (props) => {
  return (
    <div className={classes["main-container"]}>
      <svg
        viewBox="0 0 1280 3723"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ProductThinkingBlock boxData={boxesData["productThinking"]} />
        <ResearchBlock boxData={boxesData["research"]} />
        <UserExperienceBlock boxData={boxesData["userExperience"]} />
        <UserInterfaceBlock boxData={boxesData["userInterface"]} />
        <CommunicationBlock boxData={boxesData["communication"]} />
        <Lines />
      </svg>
    </div>
  );
};

export default MainContainer;
