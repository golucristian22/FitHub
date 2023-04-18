import { useEffect, useState } from "react";
import Nav from "../../components/navigation/navigation-component";
import Product from "../../components/product/product-component";
import "./products-styles.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Nav />
      <div className="products-container">
        {products.map(product => {
          return (<Product
            key={product.id}
            imageSrc={product.image}
            imageAlt={product.imageAlt} 
            productHref="https://www.google.com"
            productOpenInNewTab="true"
            productTitle={product.title}
            productPrice={product.price + "$"}
          />)
        })}
      </div>
    </>
  );
}

export default Products;
