import React from "react";
import Banner from "../../components/organisms/banner/banner-component.tsx";
import Footer from "../../components/organisms/footer/footer-component.tsx";
import Nav from "../../components/organisms/navigation/navigation-component.tsx";
import ProductCategory from "../../components/molecules/product-category/product-category-component.tsx";
import proteinCategoryPhoto from "../../assets/images/category-protein.png";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <ProductCategory
        href="#"
        src={proteinCategoryPhoto}
        alt="Protein"
        title="Protein"
        buttonText="SHOP NOW"
      />
      <Footer />
    </>
  );
}

export default Home;
