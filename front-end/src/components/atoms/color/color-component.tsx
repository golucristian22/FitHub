import React from "react";
import "./color-styles.scss";

interface ColorPropertiesInterface {
  href: string;
  color: string;
}

function Color(props: ColorPropertiesInterface) {
  return (
    <a
      className="color"
      href={props.href}
    >
      <span style={{ backgroundColor: props.color }}></span>
    </a>
  );
}

export default Color;
