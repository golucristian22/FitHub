import React from "react";
import "./product-categories-styles.scss";

interface productCategoriesPropertiesInterface {
    firstProductCategory: React.ReactNode;
    secondProductCategory: React.ReactNode;
}

function ProductCategories(props: productCategoriesPropertiesInterface) {
  return (
    <section className="product-categories">
      <div className="product-categories__first-product-category">
        {props.firstProductCategory}
      </div>
      <div className="product-categories__second-product-category">
        {props.secondProductCategory}
      </div>
    </section>
  );
}

export default ProductCategories;
