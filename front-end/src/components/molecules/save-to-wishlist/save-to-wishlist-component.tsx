import React, { useState } from "react";
import Icon from "../../atoms/icon/icon-component";
import "./save-to-wishlist-styles.scss";

function SaveToWishlist() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="save-to-wishlist"
      onClick={() => setIsSelected(!isSelected)}
    >
      <Icon
        iconName={isSelected ? "heart-filled" : "heart"}
        iconColor="var(--color-accent-secondary)"
        iconHeight="30px"
        iconWidth="30px"
      />
      <p className="text-color-primary text-size-lg">Save to Wishlist</p>
    </div>
  );
}

export default SaveToWishlist;
