import React, { useState } from "react";
import "./filter-styles.scss";
import Icon from "../../atoms/icon/icon-component";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`filter ${isOpen ? "filter--open" : ""}`} onClick={onFilterClick}>
      <div className="filter__header">
        <h5 className="header__heading">Relevance</h5>
        <Icon iconName="chevron-down" iconColor="#fff" iconHeight="24px" iconWidth="24px" />
      </div>
      <div className="filter__content">
        <p className="content__option text-size-lg">Popularity</p>
        <p className="content__option text-size-lg">Reviews</p>
        <p className="content__option text-size-lg">Alphabetically</p>
        <p className="content__option text-size-lg">Newest</p>
      </div>
    </div>
  );

  function onFilterClick() {
    setIsOpen(!isOpen);
  }
}

export default Filter;
