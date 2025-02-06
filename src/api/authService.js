import { apiFetch } from "./apiClient";

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
