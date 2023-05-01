import React from "react";
import "./banner-styles.scss";
import BannerImage from "../../../assets/images/banner.png";

function Banner() {
  return (
    <section className="banner" style={ {paddingBottom: ""} }>
      <img className="banner__image" src={BannerImage} alt="Placeholder" />
      <div className="banner__text-container">
        <h3 className="banner__text">
          Power Up Your Performance with FitHub Supplements
        </h3>
      </div>
    </section>
  );
}

export default Banner;
