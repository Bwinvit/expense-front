import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { isExpired, decodeToken } from "react-jwt";
import AuthService from "../Service/Auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkToken = CheckToken();
        if (checkToken) {
            profile();
        }
    }, []);

    const profile = async () => {
        try {
            const res = await AuthService.profile();
            setUser(res.user);
        } catch (err) {
            console.error("Error fetching profile:", err);
            signOut();
        }
    };

    const signIn = (user) => {
        Cookies.set("token", user.token);
        setUser(decodeToken(user.token));
    };

    const signOut = () => {
        Cookies.remove("token");
        setUser(null);
    };

    const CheckToken = () => {
        const token = Cookies.get("token");

        if (token) {
            try {
                decodeToken(token);
                return true;
            } catch (err) {
                if (err.name === "TokenExpiredError") {
                    signOut();
                }
                return false;
            }
        } else {
            return false;
        }
    };

    const AuthContextValue = {
        user,
        signIn,
        signOut,
        CheckToken,
    };

    return (
        <AuthContext.Provider value={AuthContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
