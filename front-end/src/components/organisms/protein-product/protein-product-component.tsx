import React from "react";
import "./protein-product-styles.scss";
import ProductContent from "../../molecules/product-content/product-content-component";
import TitleAndChild from "../../molecules/title-and-child/title-and-child-component";
import Filter from "../../molecules/filter/filter-component";
import Block from "../../atoms/block/block-component";
import Blocks from "../../molecules/blocks/blocks-component";

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
        <div className="protein-product__accordions protein-product__accordions--desktop">
          {props.children}
        </div>
      </div>
      <div className="protein-product__right-content">
        <ProductContent
          title="Product Title"
          description="Product Description"
          price="19.99$"
        >
          <TitleAndChild title={<h4>Flavour:</h4>}>
            <Filter title="Unflavored">
              <>Unflavored</>
              <>Chocolate</>
              <>White Chocolate</>
            </Filter>
          </TitleAndChild>
          <TitleAndChild title={<h4>Amount:</h4>}>
            <Blocks>
              <Block variant="default" text="250g" isResponsive />
              <Block variant="default" text="500g" isResponsive />
              <Block variant="default" text="1kg" isResponsive />
              <Block variant="default" text="2.5kg" isResponsive />
              <Block variant="default" text="5kg" isResponsive />
            </Blocks>
          </TitleAndChild>
        </ProductContent>
        <div className="protein-product__accordions protein-product__accordions--mobile">
          {props.children}
        </div>
      </div>
    </section>
  );
}

export default ProteinProduct;
