import axios from "axios";

// Create axios instance
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({ baseURL, timeout: 10000 });

// Optional: attach token if you use auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Optional: global error handling
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err);
    // show eror toast msg
    return Promise.reject(err);
  }
);

// Simple helpers
export const get = (url, params) =>api.get(url, { params }).then((res) => res.data);
export const post = (url, data) => api.post(url, data).then((res) => res.data);
export const put = (url, data) => api.put(url, data).then((res) => res.data);
export const patch = (url, data) =>  api.patch(url, data).then((res) => res.data);
export const del = (url) => api.delete(url).then((res) => res.data);

export default api;


// usage
// import { patch } from "../api";
// const updateUser = async () => await patch("/users/12", { name: "Updated Name" });