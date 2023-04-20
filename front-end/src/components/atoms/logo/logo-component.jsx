import "./logo-styles.scss";
import logoSVG from "../../../assets/vectors/logo.svg"

function Logo() {
  return (
    <a className="logo" href="/">
      <img className="logo__image" src={logoSVG} alt="Logo" />
    </a>
  );
}

export default Logo;
