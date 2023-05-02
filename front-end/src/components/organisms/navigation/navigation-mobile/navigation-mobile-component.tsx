import React from "react";
import "./navigation-mobile-styles.scss";
import Logo from "../../../atoms/logo/logo-component";
import TextWithIcon from "../../../atoms/text-with-icon/text-with-icon-component";
import Menu from "../../../atoms/menu/menu-component";
import { useEffect, useState } from "react";

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("menuClick", onMenuClick);
    return () => {
      document.removeEventListener("menuClick", onMenuClick);
    };
  });

  return (
    <>
      <nav className={`nav-mobile ${isOpen ? "nav-mobile--open" : ""}`}>
        <div className="nav-mobile__header">
          <Logo />
          <Menu />
        </div>
        <div className="nav-mobile__content">
          <div className="content__main">
            <TextWithIcon
              href="/"
              text={<h5 className="text-color-accent-primary">Basket (2)</h5>}
              iconName="basket"
              iconWidth="30"
              iconHeight="30"
              iconColor="var(--color-accent-primary)"
              isReversed
            />
            <TextWithIcon
              href="/"
              text={<h5 className="text-color-accent-primary">Account</h5>}
              iconName="user"
              iconWidth="30"
              iconHeight="30"
              iconColor="var(--color-accent-primary)"
              isReversed
            />
          </div>
          <span className="content__bar"></span>
          <div className="content__links">
            <a className="content__link h5" href="/">Protein</a>
            <a className="content__link h5" href="/">Clothes</a>
            <a className="content__link h5" href="/">Vitamins</a>
            <a className="content__link h5" href="/">Food & Snacks</a>
          </div>
        </div>
      </nav>
    </>
  );

  function onMenuClick() {
    setIsOpen(!isOpen);
  }
}

export default NavMobile;
