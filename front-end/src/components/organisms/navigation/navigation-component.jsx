import "./navigation-styles.scss";
import Logo from "../../atoms/logo/logo-component";
import logoImage from "../../../assets/vectors/logo.svg";
import TextWithIcon from "../../atoms/text-with-icon/text-with-icon-component";

function Nav() {
  return (
    <nav className="nav">
      <Logo href="/" logo={logoImage} alt="Logo Image" />
      <div className="nav__content">
        <TextWithIcon
          href="/"
          text={<h6 style={{ color: "#fff" }}>Merge?</h6>}
          iconName="linkedin"
          iconWidth="30"
          iconHeight="30"
          iconColor="#999"
          reversed
        />
      </div>
    </nav>
  );
}

export default Nav;
