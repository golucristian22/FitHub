import React from "react";
import Banner from "../../components/organisms/banner/banner-component.tsx";
import Footer from "../../components/organisms/footer/footer-component.tsx";
import Nav from "../../components/organisms/navigation/navigation-component.tsx";
import ProductCategory from "../../components/molecules/product-category/product-category-component.tsx";
import ProductCategories from "../../components/organisms/product-categories/product-categories-component.tsx";

import proteinCategoryPhoto from "../../assets/images/category-protein.png";
import clothingCategoryPhoto from "../../assets/images/category-clothing.png";
import Rating from "../../components/atoms/rating/rating-component.tsx";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Rating stars={1.8} reviews={0}/>
      <ProductCategories
        firstProductCategory={
          <ProductCategory
            href="/"
            src={proteinCategoryPhoto}
            alt="Protein"
            title="Protein"
            buttonText="SHOP NOW"
          />
        }
        secondProductCategory={
          <ProductCategory
            href="/"
            src={clothingCategoryPhoto}
            alt="Clothing"
            title="Clothing"
            buttonText="SHOP NOW"
          />
        }
      />
      <Footer />
    </>
  );
}

export default Home;
