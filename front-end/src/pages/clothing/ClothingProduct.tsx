import React from "react";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Accordion from "../../components/molecules/accordion/accordion-component";
import ProductSection from "../../components/organisms/product-section/product-section-component";
import Accordions from "../../components/molecules/accordions/accordions-component";

function ClothingProduct() {
  return (
    <>
      <Nav />
      <ProductSection
        imageSrc="https://via.placeholder.com/400x600"
        imageAlt="placeholder"
      >
        <Accordions>
          <Accordion
            mainTitle="Product Overview"
          >
            <>
              High waisted leggings for high level performance! The Tempo
              seamless leggings are a training staple. Made with sweat wicking
              fabric and contouring textures, these are an essential for your
              sessions.<br/><br/>Treated with Polygiene StayFresh™*, an odor-control
              technology that inhibits the growth of odor-causing bacteria, so
              the product stays fresh longer and requires less washing.
            </>
          </Accordion>
          <Accordion
            mainTitle="Key Benefits"
          >
            <>
              High waisted leggings for high level performance! The Tempo
              seamless leggings are a training staple. Made with sweat wicking
              fabric and contouring textures, these are an essential for your
              sessions.<br/><br/>Treated with Polygiene StayFresh™*, an odor-control
              technology that inhibits the growth of odor-causing bacteria, so
              the product stays fresh longer and requires less washing.
            </>
          </Accordion>
          <Accordion
            mainTitle="Fit & Fabric Composition"
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

export default ClothingProduct;
