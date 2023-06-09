import React from "react";
import "./menu-styles.scss";

function Menu() {
  return (
    <div className="menu" onClick={onMenuClick}>
      <div className="menu__line menu__line--first"></div>
      <div className="menu__line menu__line--second"></div>
      <div className="menu__line menu__line--third"></div>
    </div>
  );
}

function menuEventDispatcher() {
  const event = new CustomEvent("menuClick", {
    bubbles: true,
    composed: true,
  });
  document.dispatchEvent(event);
}

function onMenuClick() {
  const menu = document.querySelector(".menu");
  if (menu) {
    menu.classList.toggle("menu--open");
    menuEventDispatcher();
  } else {
    throw new Error("No element with class 'menu' found");
  }
}

export default Menu;
