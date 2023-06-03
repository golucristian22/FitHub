import React from "react";
import "./product-section-styles.scss";

interface proteinProductInterface {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactElement;
  productContent: React.ReactElement;
}

function ProductSection(props: proteinProductInterface) {
  return (
    <section className="product-section">
      <div className="product-section__left-content">
        <div className="product-section__image-container">
          <img
            className="product-section__image"
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        </div>
        <div className="product-section__accordions product-section__accordions--desktop">
          {props.children}
        </div>
      </div>
      <div className="product-section__right-content">
        {props.productContent}
        <div className="product-section__accordions product-section__accordions--mobile">
          {props.children}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
