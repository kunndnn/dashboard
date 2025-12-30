// store/authBridge.js
import { useAuthStore } from "./authStore";

export const authLogout = () => {
  useAuthStore.getState().logout();
};
