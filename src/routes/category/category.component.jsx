import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/productCard.component";
import {CategoryContainer, Title} from  "./category.styles.jsx";
import {setCategories} from '../../store/categories/category.selector'

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(setCategories)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
