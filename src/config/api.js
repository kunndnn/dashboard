import axios from "axios";
import { authLogout } from "../store/authBridge";

// Create axios instance
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL,
  timeout: 10000,
});

/* ---------------------------------------------------
   REQUEST INTERCEPTOR – attach token + expiry check
--------------------------------------------------- */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const { exp } = payload;

        // Token expired
        if (exp < Date.now() / 1000) {
          authLogout();
          return Promise.reject(new axios.Cancel("Token expired"));
        }

        // Ensure headers object exists
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        // Invalid / malformed token
        authLogout();
        return Promise.reject(new axios.Cancel("Invalid token"));
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ---------------------------------------------------
   RESPONSE INTERCEPTOR – global error handling
--------------------------------------------------- */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isCancel(error)) {
      console.error("API Error:", error);
      // show global error toast here if needed
    }
    return Promise.reject(error);
  }
);

/* ---------------------------------------------------
   HTTP HELPERS
--------------------------------------------------- */

// GET (merge params + config correctly)
export const get = (url, params = {}, config = {}) => api .get(url, { ...config, params }).then((res) => res.data);

// POST
export const post = (url, data, config = {}) => api.post(url, data, config).then((res) => res.data);

// PUT
export const put = (url, data, config = {}) =>  api.put(url, data, config).then((res) => res.data);

// PATCH
export const patch = (url, data, config = {}) => api.patch(url, data, config).then((res) => res.data);

// DELETE
export const del = (url, config = {}) => api.delete(url, config).then((res) => res.data);

export default api;
