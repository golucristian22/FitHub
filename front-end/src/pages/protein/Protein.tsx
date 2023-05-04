import React from "react";
import Filter from "../../components/molecules/filter/filter-component";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Filters from "../../components/organisms/filters/filters-component";

function ProteinPage() {
  return (
    <>
      <Nav />
      <Filter />
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
