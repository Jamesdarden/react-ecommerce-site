import "./directory-item.styles.scss";

import React from "react";

const DirectoryItem = ({ category:{imageUrl, title} }) => {
    // const {imageUrl, title} = category
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
