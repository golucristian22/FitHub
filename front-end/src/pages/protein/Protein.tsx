import React from "react";
import Filter from "../../components/molecules/filter/filter-component";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Filters from "../../components/organisms/filters/filters-component";
import Accordion from "../../components/molecules/accordion/accordion-component";

function ProteinPage() {
  return (
    <>
      <Nav />
      <Accordion
        mainHeading="Product Overview"
        secondHeading="What is Impact Whey Protein"
        description="Premium whey packed with 21g of protein per serving, for the everyday protein you need from a quality source. And where does this whey come from?  The same cows that produce your milk and cheese — simply filtered, evaporated, and spray-dried to produce all-natural nutritionals.  Get yours in over 40 flavours, with delicious favourites including Chocolate, Vanilla, and Strawberry Cream."
      />
      <Filters
        filter={
          <>
            <Filter />
            <Filter />
            <Filter />
          </>
        }
      />
      <Footer />
    </>
  );
}

export default ProteinPage;
