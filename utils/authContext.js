import { createContext } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    const actionHandlers = {
        LOGIN: () => ({ user: action.payload.user, token: action.payload.token }),
        LOGOUT: () => ({ user: null, token: null }),
    };

    return actionHandlers[action.type] ? actionHandlers[action.type]() : state;
};
