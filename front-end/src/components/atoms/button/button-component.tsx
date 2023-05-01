import React from "react";
import "./button-styles.scss";

interface ButtonPropertiesInterface {
  variant: "primary" | "secondary";
  href: string;
  text: React.ReactNode | string;
}

function Button(props: ButtonPropertiesInterface) {
  return (
    <a className={`button button--${props.variant}`} href={props.href}>
      {props.text}
    </a>
  );
}

export default Button;
