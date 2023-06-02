import React from "react";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Accordion from "../../components/molecules/accordion/accordion-component";
import ProteinProduct from "../../components/organisms/product-section/product-section-component";
import Accordions from "../../components/molecules/accordions/accordions-component";

function ProteinProductPage() {
  return (
    <>
      <Nav />
      <ProteinProduct imageSrc="https://via.placeholder.com/400x600" imageAlt="placeholder">
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
      </ProteinProduct>
      <Footer />
    </>
  );
}

export default ProteinProductPage;
