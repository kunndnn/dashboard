// store/authStore.js
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { post } from "../config/api";
import { routes } from "@/constants/routes";

export const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        /* --------------------
           STATE
        -------------------- */
        user: null,
        token: null,

        // derived auth state
        status: false, // true = authenticated
        loading: false,
        message: null,

        /* --------------------
           ACTIONS
        -------------------- */

        // ADMIN LOGIN
        login: async (credentials) => {
          set({
            loading: true,
            message: null,
          });

          try {
            const res = await post(routes.LOGIN, credentials);
            const token = res.data.token;
            const user = res.data.user;
            set({
              user,
              token,
              status: true, // ✅ success ONLY here
              loading: false,
              message: res.message,
            });

            localStorage.setItem("token", token); // store token in storage
          } catch (err) {
            console.log({ err });
            set({
              loading: false,
              status: false,
              message: err?.response?.data?.message || "Login failed",
            });
          }
        },

        // LOGOUT
        logout: () => {
          localStorage.removeItem("token"); // remove token from storage

          set(
            {
              user: null,
              token: null,
              status: false,
              loading: false,
              message: null,
            },
            false,
            "auth/logout"
          );
        },

        profileUpdate: async (payload) => {
          set({
            loading: true,
            message: null,
          });
          try {
            console.log({payload});
            const res = await post(routes.PROFILE_UPDATE, payload);
            const user = res.data;
            console.log({ user });
            set({
              user,
              status: true,
              loading: false,
              message: res.message,
            });
          } catch (err) {
            console.log({ err });
            set({
              loading: false,
              status: false,
              message: err?.response?.data?.message || "Update failed",
            });
          }
        },
      }),
      {
        name: "admin-auth",
        storage: createJSONStorage(() => localStorage),
        // persist ONLY long-lived data
        partialize: (state) => ({
          user: state.user,
          token: state.token,
        }),
        /*
          🔑 THIS IS THE KEY PART
          After rehydration, derive status from token
        */
        onRehydrateStorage: () => (state) => {
          if (state?.token) {
            state.status = true;
          }
        },
      }
    )
  )
);
