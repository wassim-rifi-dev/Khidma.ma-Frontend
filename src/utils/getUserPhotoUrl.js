const storageBaseUrl = "http://127.0.0.1:8000/storage/";

export default function getUserPhotoUrl(photo) {
    if (!photo) {
        return null;
    }

    if (photo.startsWith("http://") || photo.startsWith("https://")) {
        return photo;
    }

    return `${storageBaseUrl}${photo}`;
}
