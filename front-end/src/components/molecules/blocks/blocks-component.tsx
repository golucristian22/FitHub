import React, { cloneElement, ReactElement, useState } from "react";
import "./blocks-styles.scss";

interface blocksProperties {
  children: ReactElement[];
}

function Blocks(props: blocksProperties) {
  const [currentSelectedBlockIndex, setCurrentSelectedIndex] = useState(0);

  return (
    <div className="blocks">
      {React.Children.map(props.children, (child, index) =>
        cloneElement(child, {
          variant: "default",
          state: index === currentSelectedBlockIndex,
          onClick: () => setCurrentSelectedIndex(index),
        })
      )}
    </div>
  );
}

export default Blocks;
