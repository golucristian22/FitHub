import React from "react";
import Filter from "../../components/molecules/filter/filter-component";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Filters from "../../components/organisms/filters/filters-component";
import Pagination from "../../components/molecules/pagination/pagination-component";

function ProteinPage() {
  return (
    <>
      <Nav />
      <Pagination pages={5}/>
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
