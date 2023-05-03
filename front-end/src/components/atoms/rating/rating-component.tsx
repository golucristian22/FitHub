import React from "react";
import "./rating-styles.scss";
import Icon from "../icon/icon-component";

interface ratingPropertiesInterface {
  reviews: number;
  stars: number;
}

function Rating(props: ratingPropertiesInterface) {
  const starIcon = (<Icon iconName="star" iconColor="var(--color-tertiary)" iconHeight="24px" iconWidth="24px" />);
  const starFilledIcon = (<Icon iconName="star-filled" iconColor="var(--color-tertiary)" iconHeight="24px" iconWidth="24px" />);

  const ratingStars = [...Array(5)].map((star, index) => {
    return Math.round(props.stars) > index ? starFilledIcon : starIcon;
  });

  return (
    <div className="rating">
      <div className="rating__stars">{ratingStars}</div>
      <p className="rating__reviews">({props.reviews})</p>
    </div>
  );
}

export default Rating;
