import React, { useState } from "react";
import "./accordion-styles.scss";
import Icon from "../../atoms/icon/icon-component";

interface accordionPropertiesInterface {
  mainHeading: string;
  secondHeading?: string;
  description: string;
}

function Accordion(props: accordionPropertiesInterface) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? "accordion--open" : ""}`}>
      <div className="accordion__header" onClick={onAccordionClick}>
        <h5 className="header__heading">{props.mainHeading}</h5>
        <Icon iconName="chevron-down" iconColor="#fff" iconHeight="24px" iconWidth="24px" />
      </div>
      <div className="accordion__content">
        <h6 className="content__heading">{props.secondHeading}</h6>
        <p className="content__description text-size-lg">{props.description}</p>
      </div>
    </div>
  );

  function onAccordionClick() {
    setIsOpen(!isOpen);
  }
}

export default Accordion;
