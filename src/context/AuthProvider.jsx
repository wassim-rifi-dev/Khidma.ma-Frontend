import { useEffect, useState } from "react";
import * as authServices from '../services/authServices';
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            authServices.getMe()
                .then(res => setUser(res.data.user))
                .catch(()=>{
                    localStorage.removeItem("token");
                });
        }
    } , [])

    async function register(data) {
        try {
            const res = await authServices.registerUser(data);

            const { user, token } = res.data;

            localStorage.setItem("token", token);

            setUser(user);
            console.log(user);
            

            return res;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    async function login(data) {
        try {
            const res = await authServices.loginUser(data);

            const { user, token } = res.data;

            localStorage.setItem("token", token);

            setUser(user);

            return res;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    return (
        <AuthContext.Provider value={{ user, register, login }} >
            {children}
        </AuthContext.Provider>
    )
}