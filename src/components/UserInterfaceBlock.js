import React from "react";
import PrimaryBox from "./boxes/PrimaryBox";
import MultiBox from "./boxes/MultiBox";
import TertiaryBox from "./boxes/TertiaryBox";
import SecondaryBox from "./boxes/SecondaryBox";

const UserInterfaceBlock = (props) => {
  return (
    <React.Fragment>
      <PrimaryBox
        x={547}
        y={2349}
        strokeColor="lime5"
        hoverColor="lime0"
        text="User Interface"
      />

      <MultiBox
        x={351}
        y={2136}
        width={207}
        height={153}
        fillColor="lime0"
        text="Usability"
      >
        <TertiaryBox
          x={367}
          y={2193}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Design Specs and Guidelines"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={367}
          y={2238}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Usability Issues"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={76}
        y={2136}
        width={207}
        height={243}
        fillColor="lime0"
        text="Fundamentals"
      >
        <TertiaryBox
          x={92}
          y={2193}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Colors Palette"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={92}
          y={2238}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Typography Scale"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={92}
          y={2283}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Grid Layouts"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={92}
          y={2328}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Icons and Assets"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={76}
        y={2405}
        width={207}
        height={198}
        fillColor="lime0"
        text="Interface Inventory"
      >
        <TertiaryBox
          x={92}
          y={2462}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Components"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={92}
          y={2507}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Templates/Page"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={92}
          y={2552}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="UI Patterns"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={76}
        y={2631}
        width={207}
        height={198}
        fillColor="lime0"
        text="Rules"
      >
        <TertiaryBox
          x={92}
          y={2686}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Design principles"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={92}
          y={2731}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Documentation"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={92}
          y={2776}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Tools"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={351}
        y={2676}
        width={207}
        height={153}
        fillColor="lime0"
        text="Design Hand-off"
      >
        <TertiaryBox
          x={367}
          y={2733}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Libraries and Specs"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={367}
          y={2778}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Hand-off Tools"
          hoverColor="lime1"
        />
      </MultiBox>

      <SecondaryBox
        x={445}
        y={2451}
        width={150}
        strokeColor="lime4"
        fillColor="lime0"
        text="Design Systems"
        hoverColor="lime1"
      />

      <SecondaryBox
        x={445}
        y={2525}
        width={150}
        strokeColor="lime4"
        fillColor="lime0"
        text="Atomic Design"
        hoverColor="lime1"
      />

      <MultiBox
        x={997}
        y={2136}
        width={207}
        height={243}
        fillColor="lime0"
        text="UI Fundamentals"
      >
        <TertiaryBox
          x={1013}
          y={2193}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Colors"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={1013}
          y={2238}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Typography"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={1013}
          y={2283}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Icons"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={1013}
          y={2328}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Grids and Spacings"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={997}
        y={2403}
        width={207}
        height={153}
        fillColor="lime0"
        text="Accessibility"
      >
        <TertiaryBox
          x={1013}
          y={2460}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Accessibility Guidelines"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={1013}
          y={2238}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Tools and Checklist"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={1013}
          y={2505}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Icons"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={997}
        y={2580}
        width={207}
        height={198}
        fillColor="lime0"
        text="Mobile App Design"
      >
        <TertiaryBox
          x={1013}
          y={2637}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Best Practices"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={1013}
          y={2682}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="iOS and Android"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={1013}
          y={2727}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Mobile UI Patterns"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={700}
        y={2450}
        width={207}
        height={153}
        fillColor="lime0"
        text="Interactions"
      >
        <TertiaryBox
          x={716}
          y={2507}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Animation Principles"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={716}
          y={2552}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Micro-interactions"
          hoverColor="lime1"
        />
      </MultiBox>

      <MultiBox
        x={700}
        y={2625}
        width={207}
        height={153}
        fillColor="lime0"
        text="Web design"
      >
        <TertiaryBox
          x={716}
          y={2682}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="HTML and CSS"
          hoverColor="lime1"
        />
        <TertiaryBox
          x={716}
          y={2727}
          width={175}
          strokeColor="lime3"
          fillColor="lime0"
          text="Responsive Layouts"
          hoverColor="lime1"
        />
      </MultiBox>
    </React.Fragment>
  );
};

export default UserInterfaceBlock;
