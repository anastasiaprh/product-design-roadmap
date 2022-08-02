import React from "react";
import PrimaryBox from "./PrimaryBox";
import MultiBox from "./MultiBox";
import TertiaryBox from "./TertiaryBox";
import SecondaryBox from "./SecondaryBox";

const BoxSwitch = (props) => {
  const { box, absoluteX, absoluteY } = props;
  if (box.type == "primaryBox") {
    return (
      <PrimaryBox
        x={box.x + absoluteX}
        y={box.y + absoluteY}
        strokeColor={box.strokeColor}
        hoverColor={box.hoverColor}
        text={box.text}
      />
    );
  }
  if (box.type == "multiBox") {
    return (
      <MultiBox
        x={box.x + absoluteX}
        y={box.y + absoluteY}
        width={box.width}
        height={box.height}
        fillColor={box.fillColor}
        text={box.text}
      />
    );
  }
  if (box.type == "tertiaryBox") {
    return (
      <TertiaryBox
        x={box.x + absoluteX}
        y={box.y + absoluteY}
        width={box.width}
        strokeColor={box.strokeColor}
        fillColor={box.fillColor}
        text={box.text}
        hoverColor={box.hoverColor}
      />
    );
  }
  if (box.type == "secondaryBox") {
    return (
      <SecondaryBox
        x={box.x + absoluteX}
        y={box.y + absoluteY}
        width={box.width}
        strokeColor={box.strokeColor}
        fillColor={box.fillColor}
        text={box.text}
        hoverColor={box.hoverColor}
      />
    );
  }
};

export default BoxSwitch;
