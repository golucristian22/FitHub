import React from "react";
import "./button-styles.scss";

interface ButtonPropertiesInterface {
  variant: "primary" | "secondary";
  isLarge?: boolean;
  href?: string;
  text: React.ReactNode | string;
}

function Button(props: ButtonPropertiesInterface) {
  const button = (
    <div className={`button button--${props.variant} ${props.isLarge ? "button--large" : ""}`}>{props.text}</div>
  );

  const buttonAsLink = (
    <a className={`button button--${props.variant} ${ props.isLarge ? "button--large" : ""}`} href={props.href}>{props.text}</a>
  );

  return props.href ? buttonAsLink : button;
}

export default Button;
