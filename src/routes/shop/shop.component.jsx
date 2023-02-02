import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {  useDispatch } from "react-redux";



import CategoriesPreview from "../categories-preview/categories-preview.component";
// import ProductCard from "../../components/product-card/productCard.component";
import Category from "../category/category.component";
import { getcategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.actions";

const Shop = () => {
  const dispatch = useDispatch()

  //when useEffect needs to be async then you need to create a function inside that is async
  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoriesArray = await getcategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };

    getcategoriesMap();
  }, );

  return (

      <Routes>
        <Route index element={<CategoriesPreview  />} />
        <Route path=":category" element={<Category />} />
      </Routes>

  );
};

export default Shop;
