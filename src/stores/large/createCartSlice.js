// 1. `StateCreator` generic helps type the slice correctly - removed in JS
export const createCartSlice = (set, get) => ({
    cart: [],

    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id);
        if (existingItem) {
            // Immutable update pattern
            return {
                cart: state.cart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
            };
        }
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

    removeFromCart: (itemId) => set((state) => ({
        cart: state.cart.filter((i) => i.id !== itemId),
    })),

    clearCart: () => set({ cart: [] }),

    // 2. Using `get()` to read state (like a selector or computed value)
    totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: () => get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
});
