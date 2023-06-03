import React from "react";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Accordion from "../../components/molecules/accordion/accordion-component";
import ProductSection from "../../components/organisms/product-section/product-section-component";
import Accordions from "../../components/molecules/accordions/accordions-component";
import Block from "../../components/atoms/block/block-component";
import Blocks from "../../components/molecules/blocks/blocks-component";
import ProductContent from "../../components/molecules/product-content/product-content-component";
import TitleAndChild from "../../components/molecules/title-and-child/title-and-child-component";
import Color from "../../components/atoms/color/color-component";
import Colors from "../../components/molecules/colors/colors-component";

function ClothingProduct() {
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
            <TitleAndChild title={<h4>Color:</h4>}>
              <Colors
                color={
                  <>
                    <Color color="var(--color-primary)" href="/product/green" />
                    <Color color="var(--color-secondary)" href="/product/red" />
                    <Color
                      color="var(--color-tertiary)"
                      href="/product/yellow"
                    />
                    <Color
                      color="var(--color-accent-primary)"
                      href="/product/blue"
                    />
                    <Color
                      color="var(--color-accent-secondary)"
                      href="/product/dark-blue"
                    />
                  </>
                }
              />
            </TitleAndChild>
            <TitleAndChild title={<h4>Size:</h4>}>
              <Blocks>
                <Block variant="default" text="XS" isResponsive />
                <Block variant="default" text="S" isResponsive />
                <Block variant="default" text="M" isResponsive />
                <Block variant="default" text="XL" isResponsive />
                <Block variant="default" text="XXL" isResponsive />
              </Blocks>
            </TitleAndChild>
          </ProductContent>
        }
      >
        <Accordions>
          <Accordion mainTitle="Product Overview">
            <>
              High waisted leggings for high level performance! The Tempo
              seamless leggings are a training staple. Made with sweat wicking
              fabric and contouring textures, these are an essential for your
              sessions.
              <br />
              <br />
              Treated with Polygiene StayFresh™*, an odor-control technology
              that inhibits the growth of odor-causing bacteria, so the product
              stays fresh longer and requires less washing.
            </>
          </Accordion>
          <Accordion mainTitle="Key Benefits">
            <>
              High waisted leggings for high level performance! The Tempo
              seamless leggings are a training staple. Made with sweat wicking
              fabric and contouring textures, these are an essential for your
              sessions.
              <br />
              <br />
              Treated with Polygiene StayFresh™*, an odor-control technology
              that inhibits the growth of odor-causing bacteria, so the product
              stays fresh longer and requires less washing.
            </>
          </Accordion>
          <Accordion mainTitle="Fit & Fabric Composition">
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
