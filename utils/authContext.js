import { createContext } from "react";

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
      user: action.payload,
      isAuthenticated: !!action.payload,
    }),
  };

  return actionHandlers[action.type]?.() || state;
};
