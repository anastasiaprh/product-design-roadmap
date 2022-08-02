import React from "react";
import PrimaryBox from "./boxes/PrimaryBox";
import MultiBox from "./boxes/MultiBox";
import TertiaryBox from "./boxes/TertiaryBox";
import SecondaryBox from "./boxes/SecondaryBox";

const CommunicationBlock = (props) => {
  return (
    <React.Fragment>
      <PrimaryBox
        x={547}
        y={3163}
        strokeColor="orange5"
        hoverColor="orange0"
        text="Communication"
      />

      <SecondaryBox
        x={409}
        y={3308}
        width={150}
        strokeColor="orange4"
        fillColor="orange0"
        text="Soft skills"
        hoverColor="orange1"
      />

      <MultiBox
        x={76}
        y={2929}
        width={243}
        height={288}
        fillColor="orange0"
        text="Product Teams"
      >
        <TertiaryBox
          x={92}
          y={2986}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Types of Product Teams"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={92}
          y={3031}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Product Team Structure"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={92}
          y={3076}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Team autonomy"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={92}
          y={3121}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Communication KPIs"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={92}
          y={3166}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Knowledge base"
          hoverColor="orange1"
        />
      </MultiBox>

      <MultiBox
        x={76}
        y={3241}
        width={243}
        height={198}
        fillColor="orange0"
        text="Collaborating with stakeholders"
      >
        <TertiaryBox
          x={92}
          y={3298}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Iterations and Feedback"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={92}
          y={3343}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Time management"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={92}
          y={3388}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Asking questions"
          hoverColor="orange1"
        />
      </MultiBox>

      <MultiBox
        x={76}
        y={3463}
        width={243}
        height={153}
        fillColor="orange0"
        text="Collaborating with designers"
      >
        <TertiaryBox
          x={92}
          y={3520}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Design Meetings"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={92}
          y={3565}
          width={211}
          strokeColor="orange3"
          fillColor="orange0"
          text="Sharing inspirations"
          hoverColor="orange1"
        />
      </MultiBox>

      <MultiBox
        x={535}
        y={3397}
        width={207}
        height={153}
        fillColor="orange0"
        text="Job interviews"
      >
        <TertiaryBox
          x={551}
          y={3454}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Beginner’s Guides"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={551}
          y={3499}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Questions to ask"
          hoverColor="orange1"
        />
      </MultiBox>

      <MultiBox
        x={766}
        y={3397}
        width={207}
        height={153}
        fillColor="orange0"
        text="Design Porftolio"
      >
        <TertiaryBox
          x={782}
          y={3454}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Best Practices"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={782}
          y={3499}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Case studies"
          hoverColor="orange1"
        />
      </MultiBox>

      <MultiBox
        x={997}
        y={3397}
        width={207}
        height={153}
        fillColor="orange0"
        text="Presentation skills"
      >
        <TertiaryBox
          x={1013}
          y={3454}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Beginner’s Guides"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={1013}
          y={3499}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Review and Feedback"
          hoverColor="orange1"
        />
      </MultiBox>

      <SecondaryBox
        x={756}
        y={3078}
        width={160}
        strokeColor="orange4"
        fillColor="orange0"
        text="Project Management"
        hoverColor="orange1"
      />

      <MultiBox
        x={997}
        y={2929}
        width={207}
        height={153}
        fillColor="orange0"
        text="Project Planning"
      >
        <TertiaryBox
          x={1013}
          y={2986}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Define OKRs"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={1013}
          y={3031}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Questions to ask"
          hoverColor="orange1"
        />
      </MultiBox>

      <MultiBox
        x={997}
        y={3106}
        width={207}
        height={198}
        fillColor="orange0"
        text="Project Planning"
      >
        <TertiaryBox
          x={1013}
          y={3163}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Agile"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={1013}
          y={3208}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Lean"
          hoverColor="orange1"
        />
        <TertiaryBox
          x={1013}
          y={3253}
          width={175}
          strokeColor="orange3"
          fillColor="orange0"
          text="Scrum"
          hoverColor="orange1"
        />
      </MultiBox>
    </React.Fragment>
  );
};

export default CommunicationBlock;
