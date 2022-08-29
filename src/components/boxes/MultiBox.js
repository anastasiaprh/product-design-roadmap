import React from "react";
import Box from "./Box";

const MultiBox = (props) => {
  const { x, y, width, height, fillColor, text, children } = props;
  const clipPathId = x + y;
  return (
    <React.Fragment>
      <defs>
        <clipPath id={`clipPath-${clipPathId}`}>
          <rect x={x} y={y} width={width} height="61" rx="16" ry="16" />
        </clipPath>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="rgb(255,255,255)"
        fillOpacity="1"
        strokeWidth="2"
        stroke="#DEE2E6"
        rx="16"
        ry="16"
      />
      <Box
        x={x}
        y={y}
        width={width}
        height={41}
        cornerRadius={0}
        fillColor={fillColor}
        strokeColor="gray3"
        text={text}
        isClickable={false}
        fillOpacity={0.3}
        fontSize="0.875em"
        fontWeight={500}
        letterSpacing="0"
        clipPathId={clipPathId}
      ></Box>
    </React.Fragment>
  );
};

export default MultiBox;
