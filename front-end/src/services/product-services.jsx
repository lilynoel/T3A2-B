import products from './fake-data.json';

export async function getProducts() {
    return products;
}

export async function getProductById(id) {
    const product = products.find((product) => product.id === parseInt(id));
    if (!product) {
        throw new Error("Could not find product");
    }
    return product;
}