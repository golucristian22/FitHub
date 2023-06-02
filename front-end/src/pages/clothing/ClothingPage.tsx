import React, { useState } from "react";
import Filter from "../../components/molecules/filter/filter-component";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";
import Filters from "../../components/organisms/filters/filters-component";
import Pagination from "../../components/molecules/pagination/pagination-component";
import Rating from "../../components/atoms/rating/rating-component";
import Product from "../../components/molecules/product/product-component";
import Products from "../../components/organisms/products/products-component";
import { CurrentPage } from "../../contexts/current-page-context";
import Colors from "../../components/molecules/colors/colors-component";
import Color from "../../components/atoms/color/color-component";

function ClothingPage() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Nav />
      <a className="h1 text-color-primary" href="/clothing/product/1">
        Product
      </a>
      <CurrentPage.Provider value={{ currentPage, setCurrentPage }}>
        <Filters pagination={<Pagination pages={3} />}>
          <Filter title="Relevance">
            <>Popularity</>
            <>Reviews</>
            <>Alphabetically</>
            <>Newest</>
          </Filter>
          <Filter title="Gender">
            <>Chocolate</>
            <>Bannana & Dark Chocolate</>
            <>Vanilla</>
            <>Cookie</>
          </Filter>
          <Filter title="Price">
            <>Ascending</>
            <>Descending</>
          </Filter>
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
                  colors={
                    <Colors
                      color={
                        <>
                          <Color
                            color="var(--color-primary)"
                            href="/product/green"
                          />
                          <Color
                            color="var(--color-secondary)"
                            href="/product/red"
                          />
                          <Color
                            color="var(--color-tertiary)"
                            href="/product/yellow"
                          />
                          <Color
                            color="var(--color-accent-primary)"
                            href="/product/blue"
                          />
                          <Color
                            color="var(--color-accent-secondary)"
                            href="/product/dark-blue"
                          />
                        </>
                      }
                    />
                  }
                  rating={<Rating stars={4.8} reviews={10} />}
                  price="19.99$"
                />
              );
            })}
          </>
        </Products>
        <Filters pagination={<Pagination pages={3} />} />
      </CurrentPage.Provider>
      <Footer />
    </>
  );
}

export default ClothingPage;
