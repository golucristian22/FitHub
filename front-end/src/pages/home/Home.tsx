import React from "react";
import Banner from "../../components/organisms/banner/banner-component.tsx";
import Footer from "../../components/organisms/footer/footer-component.tsx";
import Nav from "../../components/organisms/navigation/navigation-component.tsx";
import ProductCategory from "../../components/molecules/product-category/product-category-component.tsx";
import ProductCategories from "../../components/organisms/product-categories/product-categories-component.tsx";

import proteinCategoryPhoto from "../../assets/images/category-protein.png";
import clothingCategoryPhoto from "../../assets/images/category-clothing.png";
import Rating from "../../components/atoms/rating/rating-component.tsx";
import Product from "../../components/molecules/product/product-component.tsx";
import Color from "../../components/atoms/color/color-component.tsx";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <div style={{ width: "388px" }}>
        <Product
          imageSrc="https://via.placeholder.com/400x300"
          imageAlt="placeholder"
          title="Test Product"
          colors={<Color color="var(--color-accent-secondary)" href="/product/green"/>}
          rating={<Rating stars={4.8} reviews={10} />}
          price="19.99$"
        />
      </div>
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
