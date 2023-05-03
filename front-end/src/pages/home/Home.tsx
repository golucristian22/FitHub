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
import Colors from "../../components/molecules/colors/colors-component.tsx";
import Products from "../../components/molecules/products/products-component.tsx";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
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
 
      <Products product= {
        <>
          <Product
            imageSrc="https://via.placeholder.com/400x300"
            imageAlt="placeholder"
            title="Test Product With Longer Text For Testing Purposes"
            colors={
              <Colors
                color={
                  <>
                    <Color color="var(--color-primary)" href="/product/green" />
                    <Color color="var(--color-secondary)" href="/product/red" />
                    <Color color="var(--color-tertiary)" href="/product/yellow" />
                    <Color color="var(--color-accent-primary)" href="/product/blue" />
                    <Color color="var(--color-accent-secondary)" href="/product/dark-blue" />
                  </>
                }
              />
            }
            rating={<Rating stars={4.8} reviews={10} />}
            price="19.99$"
          />
          <Product
            imageSrc="https://via.placeholder.com/400x300"
            imageAlt="placeholder"
            title="Test Product"
            colors={
              <Colors
                color={
                  <>
                    <Color color="var(--color-primary)" href="/product/green" />
                    <Color color="var(--color-secondary)" href="/product/red" />
                    <Color color="var(--color-tertiary)" href="/product/yellow" />
                    <Color color="var(--color-accent-primary)" href="/product/blue" />
                    <Color color="var(--color-accent-secondary)" href="/product/dark-blue" />
                  </>
                }
              />
            }
            rating={<Rating stars={4.8} reviews={10} />}
            price="19.99$"
          />
          <Product
            imageSrc="https://via.placeholder.com/400x300"
            imageAlt="placeholder"
            title="Test Product"
            colors={
              <Colors
                color={
                  <>
                    <Color color="var(--color-primary)" href="/product/green" />
                    <Color color="var(--color-secondary)" href="/product/red" />
                    <Color color="var(--color-tertiary)" href="/product/yellow" />
                    <Color color="var(--color-accent-primary)" href="/product/blue" />
                    <Color color="var(--color-accent-secondary)" href="/product/dark-blue" />
                  </>
                }
              />
            }
            rating={<Rating stars={4.8} reviews={10} />}
            price="19.99$"
          />
        </>
        } 
      />
     <Footer />
    </>
  );
}

export default Home;
