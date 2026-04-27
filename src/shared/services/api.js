import axios from 'axios';

const DEFAULT_LOCAL_API_URL = 'http://localhost:8000/api';

function resolveApiBaseUrl() {
    const envUrl = import.meta.env.VITE_API_BASE_URL?.trim();

    if (envUrl) {
        return envUrl;
    }

    if (import.meta.env.DEV) {
        return '/api';
    }

    return DEFAULT_LOCAL_API_URL;
}

export const API_BASE_URL = resolveApiBaseUrl();

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})
