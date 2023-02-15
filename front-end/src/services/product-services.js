// import products from "./fake-data.json";
// import api from "./api";

// export async function getProducts() {
//   try {
//     const response = await api.get("/products");
//     return response.data;
//   } catch error
//   }

// export async function getProductById(id) {
//   const response = await api.get(`products/${id}`);
//   return response.data;
// }

// export async function createNewProduct(productDetails) {
//   const response = await api.post("/products", productDetails);
//   return response.data;
// }

import products from "./fake-data.json";
import api from "./api";

export async function getProducts() {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const response = await api.get(`products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createNewProduct(productDetails) {
  try {
    const response = await api.post("/products", productDetails);
    return response.data;
  } catch (error) {
    throw error;
  }
}
