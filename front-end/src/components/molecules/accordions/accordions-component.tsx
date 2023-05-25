import React, { ReactElement, cloneElement, useState } from "react";

interface accoridonsProperties {
  children: ReactElement[];
}

function Accordions(props: accoridonsProperties) {
  const [currentOpenAccordionIndex, setCurrentOpenAccordionIndex] = useState<number>(0);
  return (
    <div className="accordions">
      {React.Children.map(props.children, (child, index) =>
        cloneElement(child, {
          isOpen: index === currentOpenAccordionIndex,
          onClick: () => setCurrentOpenAccordionIndex(index),
        })
      )}
    </div>
  );
}

export default Accordions;
