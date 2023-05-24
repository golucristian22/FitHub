import React, { useState } from "react";
import "./filter-styles.scss";
import Icon from "../../atoms/icon/icon-component";

interface filterProperties {
  title: string;
  children: React.ReactNode[];
}

function Filter(props: filterProperties) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(props.title);

  return (
    <div className={`filter ${isOpen ? "filter--open" : ""}`} onClick={onFilterClick}>
      <div className="filter__header">
        <h5 className="header__heading">{title}</h5>
        <Icon iconName="chevron-down" iconColor="#fff" iconHeight="24px" iconWidth="24px" />
      </div>
      <div className="filter__content">
        {props.children.map((child, index) => {
          return <p className="content__option text-size-lg" onClick={(e) => onOptionClick(e)} key={index}>{child}</p>
        })}
      </div>
    </div>
  );

  function onFilterClick() {
    setIsOpen(!isOpen);
  }

  function onOptionClick(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    setTitle(e.currentTarget.innerText);
  }
}

export default Filter;
