import api from "./api";

export async function userLogin(details) {
  try {
    const response = await api.post("/auth/login", details);
    const { jwt } = response.data;
    sessionStorage.setItem("jwt", jwt);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function registerUser(details) {
  try {
    const response = await api.post("/auth/register", details);
    const { jwt } = response.data;
    sessionStorage.setItem("jwt", jwt);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.errors;
  }
}

export async function logoutUser() {
  sessionStorage.setItem("jwt", null);
}
