import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        position: absolute;
        display:none;
        width: 80%;
        bottom:50px;
    }

    &:hover {
        img {
            opacity: 0.8;
            scale: 1.01;
        }
        button {
            display: flex;
            opacity: 0.8;
        }
    }
`


export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 5%;
    font-size: 18px;
`

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const Price = styled.span`
    width: 10%;
`
  

  