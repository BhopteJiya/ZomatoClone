import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/auth",
});

// LOGIN
export const loginUser = (data) => API.post("/login", data);

// REGISTER
export const registerUser = (data) => API.post("/register", data);
