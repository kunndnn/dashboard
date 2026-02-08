export const createUserSlice = (set) => ({
    user: null,
    login: (name, email) => set({ user: { name, email } }),
    logout: () => set({ user: null }),
});
