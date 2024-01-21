export const ErrorHandling = (error) => {
    if (error.response) {
        console.error(
            "Server error:",
            error.response.status,
            error.response.data
        );
        throw new Error("Request failed");
    } else if (error.request) {
        console.error("Network error:", error.request);
        throw new Error("Network error");
    } else {
        console.error("Error:", error.message);
        throw new Error("Something went wrong");
    }
};
