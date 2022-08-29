import React from "react";
import Box from "./Box";

const TertiaryBox = (props) => {
  const { x, y, width, fillColor, strokeColor, text, hoverColor } = props;
  return (
    <Box
      x={x}
      y={y}
      width={width}
      height={35}
      cornerRadius={12}
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

export default TertiaryBox;
