import axios from 'axios';

const CURRENT_TUNNEL_API_URL = 'https://accessories-domain-merchants-holly.trycloudflare.com/api';
const LEGACY_TUNNEL_API_URL = 'https://workout-settled-larger-glance.trycloudflare.com/api';

function resolveApiBaseUrl() {
    const envUrl = import.meta.env.VITE_API_BASE_URL;

    if (envUrl === LEGACY_TUNNEL_API_URL) {
        return CURRENT_TUNNEL_API_URL;
    }

    return envUrl || CURRENT_TUNNEL_API_URL;
}

export const API_BASE_URL = resolveApiBaseUrl();

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
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
