import { useReducer, useEffect } from "react";
import { AuthContext, authReducer } from "../hooks/useAuth.js";
import { verifyAuth } from "../services/authentication.js";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await verifyAuth();
        const isAuthenticated = userData.ok ? true : false
        dispatch({ type: "CHECK_AUTH", payload: isAuthenticated });
      } catch {
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
