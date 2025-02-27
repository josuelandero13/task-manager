import { useContext, createContext } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  const actionHandlers = {
    LOGIN: () => ({
      user: action.payload,
      isAuthenticated: true,
    }),
    LOGOUT: () => ({
      user: null,
      isAuthenticated: false,
    }),
    CHECK_AUTH: () => ({
      user: null,
      isAuthenticated: action.payload,
    }),
  };

  return actionHandlers[action.type]?.() || state;
};

export const useAuth = () => useContext(AuthContext);

