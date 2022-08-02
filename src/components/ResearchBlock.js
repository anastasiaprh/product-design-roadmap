import React from "react";
import PrimaryBox from "./boxes/PrimaryBox";
import MultiBox from "./boxes/MultiBox";
import TertiaryBox from "./boxes/TertiaryBox";
import SecondaryBox from "./boxes/SecondaryBox";

const ResearchBlock = (props) => {
  return (
    <React.Fragment>
      <PrimaryBox
        x={547}
        y={805}
        strokeColor="violet5"
        hoverColor="violet0"
        text="Design Research"
      />

      <MultiBox
        x={76}
        y={665}
        width={243}
        height={333}
        fillColor="violet0"
        text="Discover (Primary Research)"
      >
        <TertiaryBox
          x={92}
          y={722}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Interviews"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={92}
          y={767}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Usability Test"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={92}
          y={812}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Surveys"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={92}
          y={857}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Contextual Inquiry"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={92}
          y={902}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Competitive Research"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={92}
          y={947}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="SWOT analysis"
          hoverColor="violet1"
        />
      </MultiBox>

      <MultiBox
        x={186}
        y={1051}
        width={243}
        height={153}
        fillColor="violet0"
        text="Types"
      >
        <TertiaryBox
          x={202}
          y={1108}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Qualitative Research"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={202}
          y={1153}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Quantitative Research"
          hoverColor="violet1"
        />
      </MultiBox>

      <MultiBox
        x={961}
        y={665}
        width={243}
        height={243}
        fillColor="violet0"
        text="Explore and Experiment"
      >
        <TertiaryBox
          x={977}
          y={722}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Task Analysis"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={977}
          y={767}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Analytics"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={977}
          y={812}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="A/B Testing"
          hoverColor="violet1"
        />
        <TertiaryBox
          x={977}
          y={857}
          width={211}
          strokeColor="violet3"
          fillColor="violet0"
          text="Card Sorting"
          hoverColor="violet1"
        />
      </MultiBox>
      <SecondaryBox
        x={989}
        y={940}
        width={187}
        strokeColor="violet4"
        fillColor="violet0"
        text="Secondary Research"
        hoverColor="violet1"
      />
      <SecondaryBox
        x={989}
        y={996}
        width={187}
        strokeColor="violet4"
        fillColor="violet0"
        text="Research Tools"
        hoverColor="violet1"
      />
      <SecondaryBox
        x={989}
        y={1052}
        width={187}
        strokeColor="violet4"
        fillColor="violet0"
        text="Research Repository"
        hoverColor="violet1"
      />
      <SecondaryBox
        x={989}
        y={1108}
        width={187}
        strokeColor="violet4"
        fillColor="violet0"
        text="Research Planning"
        hoverColor="violet1"
      />
      <SecondaryBox
        x={989}
        y={1164}
        width={187}
        strokeColor="violet4"
        fillColor="violet0"
        text="Analysis of Findings"
        hoverColor="violet1"
      />
    </React.Fragment>
  );
};

export default ResearchBlock;
