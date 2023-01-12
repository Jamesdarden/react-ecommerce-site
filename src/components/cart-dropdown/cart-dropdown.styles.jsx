import styled from "styled-components";

import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "../button/button.styles";


export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow-y: scroll;

  // for any button with in cartdropdown container this style will apply
  //button {
    //margin-top: auto;
  //}

  //how to target nested components
  ${BaseButton},
  ${InvertedButton},
  ${GoogleSignInButton}{
    margin-top: auto
  }
`

export const EmptyMessage = styled.span`
  font-size: 16px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;


`  
  
  
  
  
  