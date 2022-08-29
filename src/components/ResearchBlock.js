import React from "react";
import BoxSwitch from "./boxes/BoxSwitch";

const ResearchBlock = (props) => {
  const { absoluteX, absoluteY, boxes } = props.boxData;
  return (
    <React.Fragment>
      {boxes.map((box) => {
        return (
          <BoxSwitch
            key={box.text + box.y + absoluteY}
            absoluteX={absoluteX}
            absoluteY={absoluteY}
            box={box}
          />
        );
      })}
    </React.Fragment>
  );
};

export default ResearchBlock;
