import React from "react";
import "./product-content-styles.scss";
import Button from "../../atoms/button/button-component";
import Bar from "../../atoms/bar/bar-component";
import SaveToWishlist from "../save-to-wishlist/save-to-wishlist-component";
import Counter from "../counter/counter-component";

interface productContentProperties {
  title: string;
  description: string;
  children: React.ReactNode | React.ReactNode[];
  price: string;
}

function ProductContent(props: productContentProperties) {
  return (
    <div className="product-content">
      <div className="product-content__header">
        <h3 className="header__title">{props.title}</h3>
        <p className="header__description h4 text-color-tertiary">{props.description}</p>
      </div>
      <div className="product-content__main">
        {props.children}        
        <h4 className="main__title">{props.price}</h4>
        <Bar background="var(--color-accent-secondary)" />
        <div className="product-content__counter">
          <h6 className="counter__title">Quantity</h6>
          <Counter />
        </div>
        <Button
          variant="primary"
          isLarge
          text={<h6 className="text-color-accent-primary">Add to basket</h6>}
        />
        <SaveToWishlist />
        <Bar background="var(--color-accent-secondary)" />
      </div>
    </div>
  );
}

export default ProductContent;
