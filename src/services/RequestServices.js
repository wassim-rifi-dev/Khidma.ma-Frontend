import { api } from "./api";

export async function getClientRequest() {
    try {
        const response = await api.get('client/request');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //

export async function getClientRequestCount() {
    try {
        const response = await api.get('client/request/count');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //

export async function getCompletedClientRequestCount() {
    try {
        const response = await api.get('client/request/count/completed');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //

export async function getClientReviewCount() {
    try {
        const response = await api.get('client/review/count');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} // review

export async function createReview(orderId, data) {
    try {
        const response = await api.post(`review/store/${orderId}`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getLastThreeClientRequest() {
    try {
        const response = await api.get('client/request/latest');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //

export async function getLastSixClientRequest() {
    try {
        const response = await api.get('client/request/latest-six');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //

export async function getProfessionalRequests() {
    try {
        const response = await api.get("professional/request");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getProfessionalRequestById(requestId) {
    try {
        const response = await api.get(`professional/request/${requestId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateProfessionalRequestStatus(requestId, status) {
    try {
        const response = await api.put(`request/update-status/${requestId}`, { status });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function createRequest(serviceId , data) {
    try {
        const response = await api.post(`request/store/${serviceId}` , data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //

export async function cancelRequest(requestId) {
    try {
        const response = await api.put(`request/cancel/${requestId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //
