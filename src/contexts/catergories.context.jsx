import { useEffect, createContext, useState } from "react";

// import { addCollectionAndDocuments} from "../utils/firebase/firebase.utils.js";
import { getCatergoriesAndDocuments} from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from "../shopdata.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // console.log(products)
  // console.log(typeof products)

  // one time run to programatically set collections in db
  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[])

  //when useEffect needs to be async then you need to create a function inside that is async
  useEffect(()=> {
    const getCatergoriesMap = async ()=> {
      const catergoryMap = await getCatergoriesAndDocuments();
      // console.log(catergoryMap);
      setCategoriesMap(catergoryMap);

    }

    getCatergoriesMap()
  },[])


  const value = { categoriesMap };

  // useEffect(()=>{
  //     // fetch data
  // },[products]);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
