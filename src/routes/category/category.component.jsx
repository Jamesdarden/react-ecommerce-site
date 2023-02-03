import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/productCard.component";
import { CategoryContainer, Title } from "./category.styles.jsx";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/category.selector";

import { Spinner } from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
