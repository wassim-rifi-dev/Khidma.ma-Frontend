const CURRENT_TUNNEL_STORAGE_URL = "https://accessories-domain-merchants-holly.trycloudflare.com/storage/";
const LEGACY_TUNNEL_STORAGE_URL = "https://workout-settled-larger-glance.trycloudflare.com/storage/";

function resolveStorageBaseUrl() {
    const envUrl = import.meta.env.VITE_STORAGE_BASE_URL;

    if (envUrl === LEGACY_TUNNEL_STORAGE_URL) {
        return CURRENT_TUNNEL_STORAGE_URL;
    }

    return envUrl || CURRENT_TUNNEL_STORAGE_URL;
}

const storageBaseUrl = resolveStorageBaseUrl();

export default function getStorageUrl(path) {
    if (!path) {
        return null;
    }

    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }

    return `${storageBaseUrl}${path}`;
}
