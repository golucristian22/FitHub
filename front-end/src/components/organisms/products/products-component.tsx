import React from "react";
import "./products-styles.scss";

interface productsPropertiesInterface {
  title?: string;
  product: React.ReactNode;
}

function Products(props: productsPropertiesInterface) {
  return ( 
    <section className="products">
      { props.title ? <h2 className="products__title">{props.title}</h2> : "" }
      <div className="products__container">{props.product}</div>
    </section>)
}

export default Products;