import { useEffect, useState } from "react";
import * as authServices from '../services/authServices';
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkAuth() {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await authServices.getMe();
                // console.log(res.data.user);
                
                setUser(res.data.user);
            } catch {
                localStorage.removeItem("token");
            } finally {
                setLoading(false);
            }
        }

        checkAuth();
    }, []);

    async function register(data) {
        try {
            const res = await authServices.registerUser(data);

            const { user, token } = res.data;

            localStorage.setItem("token", token);

            setUser(user);

            return res;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    async function login(data) {
        try {
            const res = await authServices.loginUser(data);

            const { user , token } = res.data;

            localStorage.setItem("token", token);

            setUser(user);

            return res;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    async function logout() {
        try {
            const res = await authServices.logoutUser();

            localStorage.removeItem("token");

            setUser(null);

            return res;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, register, login , logout }} >
            {children}
        </AuthContext.Provider>
    )
}