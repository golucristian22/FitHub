import Nav from "./components/navigation/navigation-component";
import Product from "./components/product/product-component";

function App() {
  return (
    <div className="container">
      <Nav />
      <Product 
        imageSrc="https://via.placeholder.com/400x400" 
        imageAlt="Placeholder"
        productHref="https://www.google.com"
        productOpenInNewTab="true"
        productTitle="Whey Protein"
        productPrice="99.99 RON"
      />

    </div>
  );
}

export default App;
