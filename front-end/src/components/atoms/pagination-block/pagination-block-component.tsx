import React, { useState } from "react";
import "./pagination-block-styles.scss";


interface paginationBlockDefaultProperties {
  variant: "default" | "disabled";
  text?: string;
  icon?: React.ReactNode;
}

type paginationBlockApointVariantProperties = 
  | {isApoint?: false; apointDirection?: "forward" | "backward"}
  | {isApoint: true; apointDirection: "forward" | "backward"}

type paginationBlockProperties = paginationBlockDefaultProperties & paginationBlockApointVariantProperties;

function PaginationBlock(props: paginationBlockProperties) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`pagination-block ${isSelected ? "pagination-block--selected" : ""} ${props.variant === "disabled" ? "pagination-block--disabled" : ""} `}
      onClick={onPaginationBlockClick}
    >
      {props.text ? <h5>{props.text}</h5> : ""}
      {props.icon ? props.icon : ""}
    </div>
  );

  function onPaginationBlockClick(): void {
    if(props.isApoint && props.apointDirection && props.variant !== "disabled") {
      dispatchApointDirectionEvent();
    } else {
      setIsSelected(true);
    }
  }

  function dispatchApointDirectionEvent(): void {
    const event = new CustomEvent("apointDirectionEvent", {
      detail: {
        direction: props.apointDirection,
      },
      composed: true,
      bubbles: true,
    })

    document.dispatchEvent(event);
  }
}

export default PaginationBlock;
