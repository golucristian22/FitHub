import React from "react";
import "./input-styles.scss";

interface inputPropertiesInterface {
    placeholder: string;
}
function Input(props: inputPropertiesInterface) {
  return <input className="input" type="text" placeholder={props.placeholder} />;
}

export default Input;
