import React from "react";
import "./filters-styles.scss";

interface filtersPropertiesInterface {
  children?: React.ReactNode;
  pagination?: React.ReactNode;
}

function Filters(props: filtersPropertiesInterface) {
  return (
    <section className="filters">
      <div className="filters__filters">{props.children}</div>
      {props.pagination ? <div className="filters__pagination">{props.pagination}</div> : "" }
    </section>
  );
}

export default Filters;