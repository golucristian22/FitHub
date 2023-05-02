import React from "react";
import "./product-category-styles.scss";
import Button from "../../atoms/button/button-component.tsx";

interface ProductCategoryProprietiesInterface {
  href?: string;
  src: string;
  alt: string
  title: string;
  buttonText: string;
}

function ProductCategory(props: ProductCategoryProprietiesInterface) {

  const productCategory = (
    <div className="product-category">
      <img className="product-category__image" src={ props.src } alt={ props.alt } />
      <div className="product-category__content">
        <h3 className="content__text">{ props.title }</h3>
        <Button variant="primary" text={ <h5 className="text-weight-regular">{ props.buttonText }</h5> } />
      </div>
    </div>
  )

  const productCategoryAsLink = (
    <a className="product-category" href={ props.href }>
      <img className="product-category__image" src={ props.src } alt={ props.alt } />
      <div className="product-category__content">
        <h3 className="content__text">{ props.title }</h3>
        <Button variant="primary" text={ <h5 className="text-weight-regular">{ props.buttonText }</h5> } />
      </div>
    </a>
  )

  return props.href ? productCategoryAsLink : productCategory;
}

export default ProductCategory;