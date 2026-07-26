import axios from "axios";

const API = axios.create({
    baseURL: "https://backend-config-6cr7.onrender.com/api/",
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default API;