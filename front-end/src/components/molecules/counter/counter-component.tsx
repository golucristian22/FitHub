import React, { useState } from "react";
import "./counter-styles.scss";
import Block from "../../atoms/block/block-component";

function Counter() {
  const [number, setNumber] = useState(1);
  return (
    <div className="counter">
      <Block variant={number <= 1 ? "disabled" : "default"} text="-" onClick={() => setNumber(number - 1)} />
      <h4 className="counter__number">{number}</h4>
      <Block variant={number >= 10 ? "disabled" : "default"} text="+" onClick={() => setNumber(number + 1)} />
    </div>
  );
}

export default Counter;
