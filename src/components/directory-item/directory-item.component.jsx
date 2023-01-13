import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

import React from "react";
import { useNavigate } from "react-router-dom";


const DirectoryItem = ({ category: { imageUrl, title , route} }) => {
  // const {imageUrl, title} = category


  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
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
