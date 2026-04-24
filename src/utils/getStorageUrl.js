const storageBaseUrl =
    import.meta.env.VITE_STORAGE_BASE_URL || "http://127.0.0.1:8000/storage/";

export default function getStorageUrl(path) {
    if (!path) {
        return null;
    }

    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }

    return `${storageBaseUrl}${path}`;
}
