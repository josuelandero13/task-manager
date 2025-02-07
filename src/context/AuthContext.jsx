import { createContext, useReducer, useContext } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload.user, token: action.payload.token };
        case "LOGOUT":
            return { user: null, token: null };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    console.log(children)
    const [state, dispatch] = useReducer(authReducer, { user: null, token: null });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
