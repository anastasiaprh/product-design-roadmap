import React from "react";
import BoxSwitch from "./boxes/BoxSwitch";

const ProductThinkingBlock = (props) => {
  const { absoluteX, absoluteY, boxes } = props.boxData;
  return (
    <React.Fragment>
      {boxes.map((box) => {
        return (
          <BoxSwitch absoluteX={absoluteX} absoluteY={absoluteY} box={box} />
        );
      })}
    </React.Fragment>
  );
};

export default ProductThinkingBlock;
