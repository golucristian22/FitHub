import React from "react";
import Filter from "../../components/molecules/filter/filter-component";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Filters from "../../components/organisms/filters/filters-component";
import Pagination from "../../components/molecules/pagination/pagination-component";
import Rating from "../../components/atoms/rating/rating-component";
import Product from "../../components/molecules/product/product-component";
import Products from "../../components/organisms/products/products-component";

function ProteinPage() {
  return (
    <>
      <Nav />
      <Filters pagination={<Pagination pages={3}/>}>
        <Filter />
        <Filter />
        <Filter />
      </Filters>
      <Products>
        <>
          {[...Array(8)].map((product, index) => {
            return (
              <Product
                imageSrc="https://via.placeholder.com/400x300"
                imageAlt="placeholder"
                title="Test Product With Longer Text For Testing Purposes"
                key={index}
                rating={<Rating stars={4.8} reviews={10} />}
                price="19.99$"
              />
            )
          })}
        </>
      </Products >
      <Footer />
    </>
  );
}

export default ProteinPage;
