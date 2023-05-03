import React from "react";
import "./products-styles.scss";

interface productsPropertiesInterface {
  product: React.ReactNode;
}

function Products(props: productsPropertiesInterface) {
  return <section className="products">{props.product}</section>;
}

export default Products;