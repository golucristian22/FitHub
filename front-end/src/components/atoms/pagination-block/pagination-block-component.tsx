import React, { useEffect, useState } from "react";
import "./pagination-block-styles.scss";

interface paginationBlockProperties {
  variant: "default" | "disabled";
  state?: boolean;
  onClick?: any;
  text?: string;
  icon?: React.ReactNode;
}

function PaginationBlock(props: paginationBlockProperties) {
  const [isSelected, setIsSelected] = useState(props.state);

  useEffect(() => {
    setIsSelected(props.state);
  }, [props.state])

  return (
    <div 
      className={`pagination-block ${isSelected ? "pagination-block--selected" : ""} ${props.variant === "disabled" ? "pagination-block--disabled" : ""} `}
      onClick={onPaginationBlockClick}
    >
      {props.text ? <h5>{props.text}</h5> : ""}
      {props.icon ? props.icon : ""}
    </div>
  );

  function onPaginationBlockClick(): void {
    props.onClick();
  }
}

export default PaginationBlock;
