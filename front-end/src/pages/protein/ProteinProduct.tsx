import React from "react";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Accordion from "../../components/molecules/accordion/accordion-component";
import ProductSection from "../../components/organisms/product-section/product-section-component";
import Accordions from "../../components/molecules/accordions/accordions-component";
import Block from "../../components/atoms/block/block-component";
import Blocks from "../../components/molecules/blocks/blocks-component";
import Filter from "../../components/molecules/filter/filter-component";
import ProductContent from "../../components/molecules/product-content/product-content-component";
import TitleAndChild from "../../components/molecules/title-and-child/title-and-child-component";

function ProteinProductPage() {
  return (
    <>
      <Nav />
      <ProductSection
        imageSrc="https://via.placeholder.com/590x600"
        imageAlt="placeholder"
        productContent={
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
        }
      >
        <Accordions>
          <Accordion
            mainTitle="Whey Protein"
            secondTitle="What is Impact Whey Protein"
          >
            <>
              Premium whey packed with 21g of protein per serving, for the
              everyday protein you need from a quality source. And where does
              this whey come from? The same cows that produce your milk and
              cheese — simply filtered, evaporated, and spray-dried to produce
              all-natural nutritionals. Get yours in over 40 flavours, with
              delicious favourites including Chocolate, Vanilla, and Strawberry
              Cream.
            </>
          </Accordion>
          <Accordion
            mainTitle="Whey Protein"
            secondTitle="What is Impact Whey Protein"
          >
            <>
              Premium whey packed with 21g of protein per serving, for the
              everyday protein you need from a quality source. And where does
              this whey come from? The same cows that produce your milk and
              cheese — simply filtered, evaporated, and spray-dried to produce
              all-natural nutritionals. Get yours in over 40 flavours, with
              delicious favourites including Chocolate, Vanilla, and Strawberry
              Cream.
            </>
          </Accordion>
          <Accordion
            mainTitle="Whey Protein"
            secondTitle="What is Impact Whey Protein"
          >
            <>
              Premium whey packed with 21g of protein per serving, for the
              everyday protein you need from a quality source. And where does
              this whey come from? The same cows that produce your milk and
              cheese — simply filtered, evaporated, and spray-dried to produce
              all-natural nutritionals. Get yours in over 40 flavours, with
              delicious favourites including Chocolate, Vanilla, and Strawberry
              Cream.
            </>
          </Accordion>
          <Accordion
            mainTitle="Whey Protein"
            secondTitle="What is Impact Whey Protein"
          >
            <>
              Premium whey packed with 21g of protein per serving, for the
              everyday protein you need from a quality source. And where does
              this whey come from? The same cows that produce your milk and
              cheese — simply filtered, evaporated, and spray-dried to produce
              all-natural nutritionals. Get yours in over 40 flavours, with
              delicious favourites including Chocolate, Vanilla, and Strawberry
              Cream.
            </>
          </Accordion>
        </Accordions>
      </ProductSection>
      <Footer />
    </>
  );
}

export default ProteinProductPage;
