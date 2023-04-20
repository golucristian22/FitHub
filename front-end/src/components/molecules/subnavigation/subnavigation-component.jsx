import "./subnavigation-styles.scss";

function Subnavigation() {
  return (
    <div className="subnavigation">
      <div className="subnavigation__content">
        <a className="content__item h5" href="/">Protein</a>
        <a className="content__item h5" href="/">Clothes</a>
        <a className="content__item h5" href="/">Vitamins</a>
        <a className="content__item h5" href="/">Food & Snacks</a>
      </div>
    </div>
  );
}

export default Subnavigation;
