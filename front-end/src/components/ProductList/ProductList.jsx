import ProductCard from '../ProductCard/ProductCard';
import data from './fake-data.json';
import style from './ProductList.module.scss';

export default function ProductList() {
    return (
        <div className={style.list}>
            {data.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    );
}