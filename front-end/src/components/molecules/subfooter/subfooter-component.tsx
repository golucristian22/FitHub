import React from "react";
import "./subfooter-styles.scss";
import Icon from "../../atoms/icon/icon-component";

function Subfooter() {
  return (
    <div className="subfooter">
      <div className="subfooter__content">
        <p className="content__copyright text-size-lg">©2023 Golu Cristian</p>
        <div className="content__items">
          <a className="content__link" href="/">
            <Icon
              iconName="github"
              iconWidth="28"
              iconHeight="28"
              iconColor="var(--color-accent-primary)"
            />
          </a>
          <a className="content__link" href="/">
            <Icon
              iconName="linkedin"
              iconWidth="28"
              iconHeight="28"
              iconColor="var(--color-accent-primary)"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Subfooter;
