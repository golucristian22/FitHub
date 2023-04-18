import "./product-styles.scss";

function Product(props) {
  return (
    <a
      className="product"
      href={props.productHref}
      target={props.productOpenInNewTab ? "_blank" : ""}
      rel="noreferrer"
    >
      <div className="product__image-container">
        <img className="product__image" src={props.imageSrc} alt={props.imageAlt} />
      </div>
      <div className="product__content">
        <h4 className="product__title">{props.productTitle}</h4>
        <span className="product__price">{props.productPrice}</span>
      </div>
    </a>
  );
}

export default Product;
