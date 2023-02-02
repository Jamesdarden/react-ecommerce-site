import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles.jsx";
import ProductCard from "../product-card/productCard.component";
// import {Link} from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
 
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title  to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
