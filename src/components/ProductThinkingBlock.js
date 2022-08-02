import React from "react";
import PrimaryBox from "./boxes/PrimaryBox";
import MultiBox from "./boxes/MultiBox";
import TertiaryBox from "./boxes/TertiaryBox";

const ProductThinkingBlock = (props) => {
  const { absoluteY } = props;
  return (
    <React.Fragment>
      <PrimaryBox
        x={547}
        y={absoluteY + 72}
        strokeColor="blue5"
        hoverColor="blue0"
        text="Product Thinking"
      />

      <MultiBox
        x={76}
        y={absoluteY + 0}
        width={243}
        height={378}
        fillColor="blue0"
        text="Pre-launch"
      >
        <TertiaryBox
          x={92}
          y={146}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Vision"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={92}
          y={191}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Goals"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={92}
          y={236}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Strategy"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={92}
          y={281}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Value Proposition"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={92}
          y={326}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product-Market Fit"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={92}
          y={371}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Roadmap"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={92}
          y={416}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Kick-off Meeting"
          hoverColor="blue1"
        />
      </MultiBox>

      <MultiBox
        x={344}
        y={322}
        width={243}
        height={198}
        fillColor="blue0"
        text="Launch"
      >
        <TertiaryBox
          x={360}
          y={379}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Launch Planning"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={360}
          y={424}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Release"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={360}
          y={469}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Press Release"
          hoverColor="blue1"
        />
      </MultiBox>

      <MultiBox
        x={693}
        y={322}
        width={243}
        height={198}
        fillColor="blue0"
        text="Post-Launch"
      >
        <TertiaryBox
          x={709}
          y={379}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Usage Analytics"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={709}
          y={424}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Customer Retention"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={709}
          y={469}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Pivot"
          hoverColor="blue1"
        />
      </MultiBox>

      <MultiBox
        x={961}
        y={89}
        width={243}
        height={196}
        fillColor="blue0"
        text="Success Metrics"
      >
        <TertiaryBox
          x={977}
          y={146}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Business Metrics"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={977}
          y={191}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Design Metrics"
          hoverColor="blue1"
        />
        <TertiaryBox
          x={977}
          y={236}
          width={211}
          strokeColor="blue3"
          fillColor="blue0"
          text="Product Engagement"
          hoverColor="blue1"
        />
      </MultiBox>
    </React.Fragment>
  );
};

export default ProductThinkingBlock;
