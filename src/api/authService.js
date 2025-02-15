import { apiFetch } from "./apiClient";

export const verifyAuth = async (credentials) => {
  return apiFetch("/check-auth", {
    method: "POST",
    body: JSON.stringify(credentials),
    credentials: "include"
  });
};

export const login = async (credentials) => {
  return apiFetch("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

export const register = async (userData) => {
  return apiFetch("/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};

export const logout = () => {
  localStorage.removeItem("token");
};
