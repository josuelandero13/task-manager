const apiUrl = import.meta.env.VITE_API_URL;

export const verifyAuth = async () => {
  const res = await fetch(`${apiUrl}/auth/check`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const login = async (credentials) => {
  const res = await fetch(`${apiUrl}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return res;
};

export const register = async (userData) => {
  const res = await fetch(`${apiUrl}/register`, {
    method: "POST",
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  return data;
};
