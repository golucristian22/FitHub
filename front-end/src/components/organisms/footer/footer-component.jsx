import "./footer-styles.scss";
import Logo from "../../atoms/logo/logo-component";
import Subfooter from "../../molecules/subfooter/subfooter-component";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <Logo />
          <div className="content__items">
            <div className="content__item">
              <h5 className="item__title text-weight-semi-bold">Products</h5>
              <div className="item__content">
                <a className="item__link text-size-lg" href="/">Protein</a>
                <a className="item__link text-size-lg" href="/">Clothes</a>
                <a className="item__link text-size-lg" href="/">Vitamins</a>
                <a className="item__link text-size-lg" href="/">Food and Snacks</a>
              </div>
            </div>
            <div className="content__item">
              <h5 className="item__title text-weight-semi-bold">Developer</h5>
              <div className="item__content">
                <a className="item__link text-size-lg" href="/">GitHub</a>
                <a className="item__link text-size-lg" href="/">LinkedIn</a>
              </div>
            </div>
            <div className="content__item">
              <h5 className="item__title text-weight-semi-bold">About Project</h5>
              <div className="item__content">
                <p className="item__link text-size-lg">React.js & React Router</p>
                <p className="item__link text-size-lg">Node.js & Express</p>
                <p className="item__link text-size-lg">AUTH</p>
                <p className="item__link text-size-lg">Figma & Responsive</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Subfooter />
    </>
  );
}

export default Footer;
