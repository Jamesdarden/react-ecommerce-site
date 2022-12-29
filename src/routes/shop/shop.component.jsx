import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";

import ProductCard from "../../components/product-card/productCard.component"

import './shop.styles.scss'


const Shop = ()=>{
    const {products }= useContext(ProductsContext);
    // console.log(products,"shop", typeof products, Array.isArray(products))
    return (
        <div className="products-container">
        {
            products.map((product) => (
                <ProductCard product={product} key={product.id}/>
        ))}
    </div>
    );

};

export default Shop;