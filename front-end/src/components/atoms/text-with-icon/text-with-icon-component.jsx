import "./text-with-icon-styles.scss";
import Icon from "../icon/icon-component";

function TextWithIcon(props) {
  return (
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
}

export default TextWithIcon;
