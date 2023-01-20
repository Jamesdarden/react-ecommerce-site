

import {  Fragment} from "react";
import { useSelector } from "react-redux";

import { setCategories } from "../../store/categories/category.selector";

import CategoryPreview from '../../components/category-preview/category-preview.component'

// import ProductCard from "../../components/product-card/productCard.component";



const CategoriesPreview = () => {
  const categoriesMap = useSelector(setCategories)

  // console.log(products,"shop", typeof products, Array.isArray(products))
  return (
    <Fragment>

      {
        //turns an object into an array
        Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return <CategoryPreview  key={title} title={title} products={products} />
        })
      }


    </Fragment>
  );
};

export default CategoriesPreview;