

import { useContext, Fragment} from "react";
import { CategoriesContext } from "../../contexts/catergories.context";
import CategoryPreview from '../../components/category-preview/category-preview.component'

// import ProductCard from "../../components/product-card/productCard.component";



const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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