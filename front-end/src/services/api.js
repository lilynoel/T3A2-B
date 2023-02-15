import axios from "axios";

const api = axios.create({
  baseURL: 'https://bone-and-biscuit.fly.dev'
});

api.interceptors.request.use((req) => {
  const jwt = sessionStorage.getItem("jwt");
  if (jwt) {
    req.headers["Authorization"] = `Bearer ${jwt}`;
  }
  return req;
});

export default api;
