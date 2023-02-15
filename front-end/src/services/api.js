import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((req) => {
  const jwt = sessionStorage.getItem("jwt");
  if (jwt) {
    req.headers["Authorization"] = `Bearer ${jwt}`;
  }
  return req;
});

export default api;
