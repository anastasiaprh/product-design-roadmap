import React from "react";
import Box from "./Box";

const PrimaryBox = (props) => {
  const { x, y, strokeColor, text, hoverColor } = props;
  return (
    <Box
      x={x}
      y={y}
      width={187}
      height={54}
      cornerRadius={20}
      fillColor="white"
      strokeColor={strokeColor}
      text={text}
      isClickable={true}
      fontSize="1.125em"
      fontWeight={600}
      letterSpacing="0"
      hoverColor={hoverColor}
    ></Box>
  );
};

export default PrimaryBox;
