export async function userLogin(details) {
  console.log(details);
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Incorrect username or password");
  }

  return await response.json();
}

// import api from "./api";

// export async function userLogin(details) {
//   try {
//     const response = await api.post("/auth/login", details);
//     const { jwt } = response.data;
//     sessionStorage.setItem("jwt", jwt);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.error);
//   }
// }

// export async function registerUser(details) {
//   try {
//     const response = await api.post("/auth/register", details);
//     const { jwt } = response.data;
//     sessionStorage.setItem("jwt", jwt);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error.response.data.errors;
//   }
// }

// export async function logoutUser() {
//   sessionStorage.setItem("jwt", null);
// }
