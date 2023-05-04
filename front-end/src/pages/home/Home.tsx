import React from "react";
import Banner from "../../components/organisms/banner/banner-component.tsx";
import Footer from "../../components/organisms/footer/footer-component.tsx";
import Nav from "../../components/organisms/navigation/navigation-component.tsx";
import ProductCategory from "../../components/molecules/product-category/product-category-component.tsx";
import ProductCategories from "../../components/organisms/product-categories/product-categories-component.tsx";

import proteinCategoryPhoto from "../../assets/images/category-protein.png";
import clothingCategoryPhoto from "../../assets/images/category-clothing.png";
import vitaminsCategoryPhoto from "../../assets/images/category-vitamins.png";
import snacksCategoryPhoto from "../../assets/images/category-snacks.png";

import Rating from "../../components/atoms/rating/rating-component.tsx";
import Product from "../../components/molecules/product/product-component.tsx";
import Color from "../../components/atoms/color/color-component.tsx";
import Colors from "../../components/molecules/colors/colors-component.tsx";
import Products from "../../components/organisms/products/products-component.tsx";
import SubscribeForm from "../../components/organisms/subscribe-form/subscribe-form-component.tsx";

function HomePage() {
  return (
    <>
      <Nav />
      <Banner />
      <ProductCategories
        firstProductCategory={
          <ProductCategory
            href="/protein"
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
 
      <Products 
        product= {
          <>
            {[...Array(3)].map((product, index) => {
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
        } 
      />
      <Products 
        product= {
          <>
            {[...Array(3)].map((product, index) => {
              return (
                <Product
                  imageSrc="https://via.placeholder.com/400x300"
                  imageAlt="placeholder"
                  title="Test Product With Longer Text For Testing Purposes"
                  key={index}
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
              )
            })}
          </>
        } 
      />
      
      <ProductCategories
        firstProductCategory={
          <ProductCategory
            href="/"
            src={vitaminsCategoryPhoto}
            alt="Protein"
            title="Protein"
            buttonText="SHOP NOW"
          />
        }
        secondProductCategory={
          <ProductCategory
            href="/"
            src={snacksCategoryPhoto}
            alt="Clothing"
            title="Clothing"
            buttonText="SHOP NOW"
          />
        }
      />

      <Products 
        product= {
          <>
            {[...Array(3)].map((product, index) => {
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
        } 
      />
      <Products 
        product= {
          <>
            {[...Array(3)].map((product, index) => {
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
        } 
      />

      <SubscribeForm 
        title="Subscribe, Save & Thrive"
        description="Get all the latest news straight to your inbox, FitHub exclusives, newest products and more!"
      />

      <Products 
        title="Brand New"
        product= {
          <>
            {[...Array(6)].map((product, index) => {
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
        } 
      />
     <Footer />
    </>
  );
}

export default HomePage;
