import React from "react";
import Filter from "../../components/molecules/filter/filter-component";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Filters from "../../components/organisms/filters/filters-component";
import PaginationBlock from "../../components/atoms/pagination-block/pagination-block-component";
import Icon from "../../components/atoms/icon/icon-component";

function ProteinPage() {
  return (
    <>
      <Nav />
      <div style={{display: "flex"}}>
        <PaginationBlock variant="disabled" isApoint apointDirection="backward" icon={<Icon iconName="chevron-left" iconColor="#fff" iconHeight="24px" iconWidth="24px" />} />
        <PaginationBlock variant="default" text="1" />
        <PaginationBlock variant="default" text="2" />
        <PaginationBlock variant="default" text="3" />
        <PaginationBlock variant="default" isApoint apointDirection="forward" icon={<Icon iconName="chevron-right" iconColor="#fff" iconHeight="24px" iconWidth="24px" />} />
      </div>
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
