// 1. Import `create` from zustand to make a store
import { create } from 'zustand';

// 2. Create the store
// `set` is a function used to update state. It merges changes shallowly.
export const useSmallStore = create((set) => ({
    // Initial state
    count: 0,
    theme: 'light',

    // Actions
    // usage: set((state) => ({ newValues }))
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),

    // You can check current state inside the updater function
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

    // Or just pass an object if you don't need the previous state
    reset: () => set({ count: 0, theme: 'light' }),
}));
