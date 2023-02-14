import products from './fake-data.json';

export async function getProducts() {
  const response = await fetch("http://localhost:3000/products");
  const products = await response.json();
  return products;
}

export async function getProductById(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  if (!response.ok) {
    throw new Error("Could not find Product");
  }
  const product = await response.json();
  return product;
}