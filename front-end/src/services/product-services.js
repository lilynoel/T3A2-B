import products from './fake-data.json';

export async function getProducts() {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products;
}

export async function getProductById(id) {
    const product = products.find((product) => product.id === parseInt(id));
    if (!product) {
        throw new Error('Could not find product');
    }
    return product;
}