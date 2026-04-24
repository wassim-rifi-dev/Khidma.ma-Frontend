export function parseRequestPayload(value) {
    if (!value) {
        return null;
    }

    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

export function formatMessageTime(value) {
    if (!value) {
        return "";
    }

    const date = new Date(value);

    return Number.isNaN(date.getTime())
        ? ""
        : date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function formatMessageDay(value) {
    if (!value) {
        return "";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();

    if (isToday) {
        return "Today";
    }

    return date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
    });
}

export function getMessagePreview(conversation) {
    const requestPayload = parseRequestPayload(conversation?.last_message_media_url);

    if (!conversation?.last_message) {
        return "No messages yet";
    }

    if (conversation.last_message_type === "request") {
        return requestPayload?.service_title
            ? `New request: ${requestPayload.service_title}`
            : "New service request";
    }

    return conversation.last_message;
}
