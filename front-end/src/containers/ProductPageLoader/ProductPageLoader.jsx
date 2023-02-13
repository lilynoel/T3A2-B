import { useState, useEffect } from 'react';
import { getProductById } from '../../services/product-services';
import ProductPage from '../../pages/Product/ProductPage';
import { useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';

export default function ProductPageLoader() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((product) => setProduct(product))
            .catch((error) => setError(error));
    }, []);
    return (
        <>
    {product && <ProductPage product={product} />}
    {error && <NotFound />}
    </>
    );
}