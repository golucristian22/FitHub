import React from "react";
import "./title-and-child-styles.scss";

interface titleAndChildProperties {
  title: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

function TitleAndChild(props: titleAndChildProperties) {
  return (
    <div className="title-and-child">
      {props.title}
      <div className="title-and-child__child">{props.children}</div>
    </div>
  );
}

export default TitleAndChild;
