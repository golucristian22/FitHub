import React from "react";
import "./product-styles.scss";
import Button from "../../atoms/button/button-component";

interface productPropertiesInterface {
  imageSrc: string;
  imageAlt: string;
  title: string;
  rating: React.ReactNode;
  colors?: React.ReactNode;
  price: string;
}

function Product(props: productPropertiesInterface) {
  return (
    <div className="product">
      <div className="product__image-container">
        <img
          className="product__image"
          src={props.imageSrc}
          alt={props.imageAlt}
        />
        <div className="product__action">
          <Button variant="primary" text={<h6 className="text-color-accent-primary">Add to Basket</h6>} />
        </div>
      </div>
      <div className="product__content">
        <h5 className="content__title">{props.title}</h5>
        <div className="content__rating">{props.rating}</div>
        {props.colors ? <div className="content__colors">{props.colors}</div> : ""}
        <h5 className="content__price">{props.price}</h5>
      </div>
    </div>
  );
}

export default Product;
