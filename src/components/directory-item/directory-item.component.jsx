import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

import React from "react";

const DirectoryItem = ({ category: { imageUrl, title } }) => {
  // const {imageUrl, title} = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        // passing image url as a prop to the styled component
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
