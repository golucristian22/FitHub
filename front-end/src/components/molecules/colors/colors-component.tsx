import React from "react";
import "./colors-styles.scss";

interface colorsPropertiesInterface {
  color: React.ReactNode;
}

function Colors(props: colorsPropertiesInterface) {
  return <div className="colors">{props.color}</div>;
}

export default Colors;
