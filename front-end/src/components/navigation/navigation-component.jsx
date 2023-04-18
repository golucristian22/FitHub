import "./navigation-styles.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__content">
        <div className="content__pages">
          <a className="content__link" href="/">Homepage</a>
          <a className="content__link" href="/blog">Blog</a>
          <a className="content__link" href="/products">Product</a>
        </div>
        <div className="content__forms">
          <a className="content__link" href="/register">Register</a>
          <a className="content__link" href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
