import { create } from 'zustand';
import { createCartSlice } from './createCartSlice';
import { createUserSlice } from './createUserSlice';
import { createProductSlice } from './createProductSlice';

// 2. Create the store
// We pass '...a' (arguments) to each slice creator.
// This allows slices to access 'set' and 'get' of the global store, enabling cross-slice interaction if needed.
export const useAppStore = create((...a) => ({
    ...createCartSlice(...a),
    ...createUserSlice(...a),
    ...createProductSlice(...a),
}));
