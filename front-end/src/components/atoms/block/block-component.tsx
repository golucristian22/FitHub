import React, { useEffect, useState } from "react";
import "./block-styles.scss";

interface blockProperties {
  variant: "default" | "disabled";
  state?: boolean;
  onClick?: () => void;
  text?: string;
  icon?: React.ReactNode;
}

function Block(props: blockProperties) {
  const [isSelected, setIsSelected] = useState(props.state);

  useEffect(() => {
    setIsSelected(props.state);
  }, [props.state])

  return (
    <div 
      className={`block ${isSelected ? "block--selected" : ""} ${props.variant === "disabled" ? "block--disabled" : ""} `}
      onClick={onPaginationBlockClick}
    >
      {props.text ? <h5>{props.text}</h5> : ""}
      {props.icon ? props.icon : ""}
    </div>
  );

  function onPaginationBlockClick(): void {
    if(!props.onClick) return;
    props.onClick();
  }
}

export default Block;
