import api from "./api";

export async function getOrders() {
  const response = await api.get("/orders");
  return response.data;
}

export async function createOrder(details) {
  const response = await api.post("/orders", details);
  return response.data;
}

export async function getOrderById(id) {
  const response = await api.get(`/orders/${id}`);
  return response.data;
}

export async function updateOrderById(id, details) {
  const response = await api.patch(`/orders/${id}`, details);
  return response.data;
}
