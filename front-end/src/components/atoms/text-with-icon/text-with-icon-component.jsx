import "./text-with-icon-styles.scss";
import Icon from "../icon/icon-component";

function TextWithIcon(props) {
  const textWithDescription = (
    <div className={`twi ${props.reversed ? "twi--reversed" : ""}`}>
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
      className={`twi ${props.reversed ? "twi--reversed" : ""}`}
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
