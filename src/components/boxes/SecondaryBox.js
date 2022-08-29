import React from "react";
import Box from "./Box";

const SecondaryBox = (props) => {
  const { x, y, width, fillColor, hoverColor, strokeColor, text } = props;
  return (
    <Box
      x={x}
      y={y}
      width={width}
      height={40}
      cornerRadius={16}
      fillColor={fillColor}
      strokeColor={strokeColor}
      text={text}
      isClickable={true}
      fontSize="0.875em"
      fontWeight={500}
      letterSpacing="-0.25"
      hoverColor={hoverColor}
    ></Box>
  );
};

export default SecondaryBox;
