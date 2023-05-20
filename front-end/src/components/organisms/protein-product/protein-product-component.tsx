import React from "react";

interface proteinProductInterface {
  children: React.ReactNode;
}

function ProteinProduct(props: proteinProductInterface) {
  return (
    <section className="protein-product">
      <div className="protein-product__left-content">
        <div className="protein-product__image-container">
          <img
            className="protein-product__image"
            src="https://via.placeholder.com/590x600"
            alt="placeholder"
          />
        </div>
        <div className="protein-product__accordions">{props.children}</div>
      </div>
      <div className="protein-product__right-content">
        <p className="text-color-primary">breaker</p>
      </div>
    </section>
  );
}

export default ProteinProduct;
