import React from "react";
import "./bar-styles.scss";

interface barProperties {
  background?: string;
  borderRadius?: string;
  height?: string;
}

function Bar(props: barProperties) {
  return (
    <div
      className="bar"
      style={{
        background: props.background ? props.background : "var(--color-primary)",
        borderRadius: props.borderRadius ? props.borderRadius : "4px",
        height: props.height ? props.height : "2px",
      }}
    ></div>
  );
}

export default Bar;
