import { useReducer, useEffect } from "react";
import { AuthContext, authReducer } from "../../utils/authContext";
import { verifyAuth } from "../api/authService.js";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await verifyAuth({ credentials: "include" });

        if (response.ok) {
          const userData = await response.json();
          dispatch({ type: "CHECK_AUTH", payload: userData });
        } else {
          dispatch({ type: "LOGOUT" });
        }
      } catch (error) {
        console.error("Error verificando autenticación:", error);
        dispatch({ type: "LOGOUT" });
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
