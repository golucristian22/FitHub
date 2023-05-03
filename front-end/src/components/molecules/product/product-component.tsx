import React from "react";
import "./product-styles.scss";

interface productPropertiesInterface {
  imageSrc: string;
  imageAlt: string;
  title: string;
  rating: React.ReactNode;
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
      </div>
      <div className="product__content">
        <h5 className="content__title">{props.title}</h5>
        <div className="content__rating">{props.rating}</div>
        <h5 className="content__price">{props.price}</h5>
      </div>
    </div>
  );
}

export default Product;
