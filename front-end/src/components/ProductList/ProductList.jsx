import ProductCard from '../ProductCard/ProductCard';
import style from './ProductList.module.scss';
import { getProducts } from '../../services/product-services';
import { useActionData } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function ProductList() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);
    
    return (
        <div className={style.list}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}