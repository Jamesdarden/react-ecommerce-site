import { useEffect, createContext, useState } from "react";

import PRODUCTS from "../shopdata.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [
    products, 
    setProducts,
  ] = useState(PRODUCTS);
  // console.log(products)
  // console.log(typeof products)
  const value = { products };

  // useEffect(()=>{
  //     // fetch data
  // },[products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
