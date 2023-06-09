import React, { useEffect, useState } from "react";
import "./accordion-styles.scss";
import Icon from "../../atoms/icon/icon-component";

interface accordionPropertiesInterface {
  isOpen?: boolean;
  mainTitle: string;
  secondTitle?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function Accordion(props: accordionPropertiesInterface) {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`accordion ${isOpen ? "accordion--open" : ""}`}>
      <div className="accordion__header" onClick={onAccordionClick}>
        <h5 className="header__heading">{props.mainTitle}</h5>
        <Icon iconName="chevron-down" iconColor="#fff" iconHeight="24px" iconWidth="24px" />
      </div>
      <div className="accordion__content">
        <h6 className="content__heading">{props.secondTitle}</h6>
        <p className="content__description text-size-lg">{props.children}</p>
      </div>
    </div>
  );

  function onAccordionClick() {
    if (props.onClick) {
      props.onClick();
    } else {
      setIsOpen(!isOpen);
    }
  }
}

export default Accordion;
