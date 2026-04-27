const DEFAULT_LOCAL_STORAGE_URL = "http://localhost:8000/storage/";

function resolveStorageBaseUrl() {
    const envUrl = import.meta.env.VITE_STORAGE_BASE_URL?.trim();

    if (envUrl) {
        return envUrl;
    }

    if (import.meta.env.DEV) {
        return "/storage/";
    }

    return DEFAULT_LOCAL_STORAGE_URL;
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
