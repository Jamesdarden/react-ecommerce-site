import "./category-item.styles.scss";

import React from "react";

const CategoryItem = ({ category:{imageUrl, title} }) => {
    // const {imageUrl, title} = category
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
