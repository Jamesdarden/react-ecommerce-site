import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ProductCard from "../../components/product-card/productCard.component";
import { CategoriesContext } from "../../contexts/catergories.context";
import {CategoryContainer, Title} from  "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
