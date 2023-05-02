import React from "react";
import "./text-with-icon-styles.scss";
import Icon from "../icon/icon-component";

interface TextWithIconPropertiesInterface {
  isReversed: boolean;
  text: string | React.ReactNode;
  href?: string;
  iconName: string;
  iconWidth: string;
  iconHeight: string;
  iconColor: string;
}

function TextWithIcon(props: TextWithIconPropertiesInterface) {
  const textWithDescription = (
    <div className={`twi ${props.isReversed ? "twi--reversed" : ""}`}>
      {props.text}
      <Icon
        iconName={props.iconName}
        iconWidth={props.iconWidth}
        iconHeight={props.iconHeight}
        iconColor={props.iconColor}
      />
    </div>
  );

  const textWithDescriptionAsLink = (
    <a
      className={`twi ${props.isReversed ? "twi--reversed" : ""}`}
      href={props.href}
    >
      {props.text}
      <Icon
        iconName={props.iconName}
        iconWidth={props.iconWidth}
        iconHeight={props.iconHeight}
        iconColor={props.iconColor}
      />
    </a>
  );

  return props.href ? textWithDescriptionAsLink : textWithDescription;
}

export default TextWithIcon;
