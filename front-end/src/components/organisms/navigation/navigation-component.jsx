import "./navigation-styles.scss";
import Subnavigation from "../../molecules/subnavigation/subnavigation-component";
import Logo from "../../atoms/logo/logo-component";
import TextWithIcon from "../../atoms/text-with-icon/text-with-icon-component";

function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav__content">
          <div className="content__logo">
            <Logo />
          </div>
          <div className="content__items">
            <TextWithIcon
              href="/"
              text={<h5 className="text-color-accent-primary">Basket (2)</h5>}
              iconName="basket"
              iconWidth="30"
              iconHeight="30"
              iconColor="var(--color-accent-primary)"
              reversed
            />
            <TextWithIcon
              href="/"
              text={<h5 className="text-color-accent-primary">Account</h5>}
              iconName="user"
              iconWidth="30"
              iconHeight="30"
              iconColor="var(--color-accent-primary)"
              reversed
            />
          </div>
        </div>
      </nav>
      <Subnavigation />
    </>
  );
}

export default Nav;
