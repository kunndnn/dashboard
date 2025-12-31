import axios from "axios";
import { authLogout } from "../store/authBridge";
// Create axios instance
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({ baseURL, timeout: 10000 });

// Optional: attach token if you use auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    // if expire token then logout /refresh token
    const { exp } = JSON.parse(atob(token.split(".")[1]));
    if (exp < Date.now() / 1000) {
      authLogout();
      return Promise.reject(new axios.Cancel("Token expired"));
    }
    // attach token in headers
    config.headers.Authorization = `Bearer ${token}`;
  }
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
export const get = (url, params) =>
  api.get(url, { params }).then((res) => res.data);
export const post = (url, data) => api.post(url, data).then((res) => res.data);
export const put = (url, data) => api.put(url, data).then((res) => res.data);
export const patch = (url, data) =>
  api.patch(url, data).then((res) => res.data);
export const del = (url) => api.delete(url).then((res) => res.data);

export default api;

// usage
// import { patch } from "../api";
// const updateUser = async () => await patch("/users/12", { name: "Updated Name" });
