import { useContext } from "react";
import { AuthContext } from "../utils/authContext";

export const useAuth = () => useContext(AuthContext);
