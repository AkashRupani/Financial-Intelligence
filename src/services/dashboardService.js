import apiClient from "./apiClient";

export const fetchDashboardData = async () => {
    const res = await apiClient.get("/dashboard");
    return res.data;
};