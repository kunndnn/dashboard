import { create } from "zustand";
import { devtools } from "zustand/middleware";
import api from "../api";
import { routes } from "@/constants/routes";

export const dashboardData = create(
  devtools((set, get) => ({
    data: null,
    loading: false,
    error: null,

    getDashboardData: async () => {
      set({ loading: true, error: null });
      try {
        const res = await api.get(routes.DASHBOARD);
        console.log({res});
      } catch (error) {
        set({
          loading: false,
          error: err?.response?.data?.message || "Failed to load dashboard",
        });
      }
    },
  }))
);
