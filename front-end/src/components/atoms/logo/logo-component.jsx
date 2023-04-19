import "./logo-styles.scss";

function Logo(props) {
  return (
    <a className="logo" href={props.href}>
      <img className="logo__image" src={props.logo} alt={props.alt} />
    </a>
  );
}

export default Logo;
