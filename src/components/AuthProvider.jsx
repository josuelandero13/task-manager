import { useReducer } from "react";
import { AuthContext, authReducer } from "../../utils/authContext";

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
      user: null,
      token: null,
    });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};