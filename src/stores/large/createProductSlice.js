// Slices can also contain async actions
export const createProductSlice = (set) => ({
    products: [],
    isLoadingProducts: false,
    fetchProducts: async () => {
        set({ isLoadingProducts: true });
        try {
            const res = await fetch('https://fakestoreapi.com/products?limit=6');
            const data = await res.json();
            set({ products: data, isLoadingProducts: false });
        } catch (e) {
            console.error(e);
            set({ isLoadingProducts: false });
        }
    },
});
