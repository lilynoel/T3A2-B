import products from "./fake-data.json";
import api from "./api";

export async function getProducts() {
  const response = await api.get("/products");
  return response.data;
}

export async function getProductById(id) {
  const response = await api.get(`products/${id}`);
  return response.data;
}

export async function createNewProduct(productDetails) {
  const response = await api.post("/products", productDetails);
  return response.data;
}
