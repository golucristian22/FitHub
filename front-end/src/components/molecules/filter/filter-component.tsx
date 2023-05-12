import React, { useState } from "react";
import "./filter-styles.scss";
import Icon from "../../atoms/icon/icon-component";

interface filterProperties {
  title: string;
  children: React.ReactNode[];
}

function Filter(props: filterProperties) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`filter ${isOpen ? "filter--open" : ""}`} onClick={onFilterClick}>
      <div className="filter__header">
        <h5 className="header__heading">{props.title}</h5>
        <Icon iconName="chevron-down" iconColor="#fff" iconHeight="24px" iconWidth="24px" />
      </div>
      <div className="filter__content">
        {props.children.map((child) => {
          return <p className="content__option text-size-lg">{child}</p>
        })}
      </div>
    </div>
  );

  function onFilterClick() {
    setIsOpen(!isOpen);
  }
}

export default Filter;
