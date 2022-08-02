import React from "react";
import PrimaryBox from "./boxes/PrimaryBox";
import MultiBox from "./boxes/MultiBox";
import TertiaryBox from "./boxes/TertiaryBox";
import SecondaryBox from "./boxes/SecondaryBox";

const UserExperienceBlock = (props) => {
  return (
    <React.Fragment>
      <PrimaryBox
        x={547}
        y={1529}
        strokeColor="cyan5"
        hoverColor="cyan0"
        text="User Experience"
      />

      <MultiBox
        x={76}
        y={1304}
        width={207}
        height={288}
        fillColor="cyan0"
        text="Empathize"
      >
        <TertiaryBox
          x={92}
          y={1361}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="User Interviews"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1406}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Surveys"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1451}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Personas"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1496}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Empathy Map"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1541}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Customer Journey Map"
          hoverColor="cyan1"
        />
      </MultiBox>

      <MultiBox
        x={76}
        y={1616}
        width={207}
        height={153}
        fillColor="cyan0"
        text="Define"
      >
        <TertiaryBox
          x={92}
          y={1673}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Problem Statement"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1718}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="User Stories"
          hoverColor="cyan1"
        />
      </MultiBox>

      <MultiBox
        x={76}
        y={1793}
        width={207}
        height={243}
        fillColor="cyan0"
        text="Ideate"
      >
        <TertiaryBox
          x={92}
          y={1850}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Brainstorming"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1895}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Information Architecture"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1940}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="User Flows"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={92}
          y={1985}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Mind Mapping"
          hoverColor="cyan1"
        />
      </MultiBox>

      <MultiBox
        x={331}
        y={1838}
        width={207}
        height={198}
        fillColor="cyan0"
        text="Prototype"
      >
        <TertiaryBox
          x={347}
          y={1895}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Sketching"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={347}
          y={1940}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Wireframing"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={347}
          y={1985}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Prototyping"
          hoverColor="cyan1"
        />
      </MultiBox>

      <MultiBox
        x={586}
        y={1883}
        width={207}
        height={153}
        fillColor="cyan0"
        text="Test and Iterate"
      >
        <TertiaryBox
          x={602}
          y={1940}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Usability Testing"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={602}
          y={1985}
          width={175}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Iterative Process"
          hoverColor="cyan1"
        />
      </MultiBox>

      <SecondaryBox
        x={360}
        y={1496}
        width={150}
        strokeColor="cyan4"
        fillColor="cyan0"
        text="Lean UX"
        hoverColor="cyan1"
      />

      <SecondaryBox
        x={360}
        y={1581}
        width={150}
        strokeColor="cyan4"
        fillColor="cyan0"
        text="Design Thinking"
        hoverColor="cyan1"
      />

      <MultiBox
        x={966}
        y={1304}
        width={238}
        height={153}
        fillColor="cyan0"
        text="Interaction Design"
      >
        <TertiaryBox
          x={982}
          y={1361}
          width={206}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Human–computer interaction"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={982}
          y={1406}
          width={206}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Cognitive Psychology"
          hoverColor="cyan1"
        />
      </MultiBox>

      <MultiBox
        x={966}
        y={1479}
        width={238}
        height={153}
        fillColor="cyan0"
        text="Visual Design in UX"
      >
        <TertiaryBox
          x={982}
          y={1536}
          width={206}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Visual Design Principles"
          hoverColor="cyan1"
        />
        <TertiaryBox
          x={982}
          y={1581}
          width={206}
          strokeColor="cyan3"
          fillColor="cyan0"
          text="Visual Hierarchy"
          hoverColor="cyan1"
        />
      </MultiBox>

      <SecondaryBox
        x={998}
        y={1706}
        width={175}
        strokeColor="cyan4"
        fillColor="cyan0"
        text="Content Strategy"
        hoverColor="cyan1"
      />

      <SecondaryBox
        x={998}
        y={1770}
        width={175}
        strokeColor="cyan4"
        fillColor="cyan0"
        text="UX Storytelling"
        hoverColor="cyan1"
      />
      <SecondaryBox
        x={998}
        y={1834}
        width={175}
        strokeColor="cyan4"
        fillColor="cyan0"
        text="Jobs-to-be-Done"
        hoverColor="cyan1"
      />
      <SecondaryBox
        x={998}
        y={1898}
        width={175}
        strokeColor="cyan4"
        fillColor="cyan0"
        text="UX Benchmarking"
        hoverColor="cyan1"
      />
    </React.Fragment>
  );
};

export default UserExperienceBlock;
