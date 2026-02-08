import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 1. usage of `persist` middleware to save state to localStorage
export const useMediumStore = create(
    persist(
        (set, get) => ({
            todos: [],
            filter: 'all',
            isLoading: false,
            error: null,

            // 2. Async Action Example
            addTodo: async (title) => {
                // A. Optimistic Update: Update UI immediately before server responds
                const tempId = Date.now();
                const newTodo = { id: tempId, title, completed: false };
                set((state) => ({ todos: [newTodo, ...state.todos] }));

                try {
                    // B. Make API call
                    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
                        method: 'POST',
                        body: JSON.stringify({ title, completed: false, userId: 1 }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    });
                    const _data = await res.json();

                    // C. (Optional) Sync with server ID if needed.
                    // Note for demo: We typically would swap the tempId with data.id here.
                } catch (err) {
                    // D. Rollback on error
                    set((state) => ({
                        error: 'Failed to add todo',
                        todos: state.todos.filter(t => t.id !== tempId)
                    }));
                }
            },

            toggleTodo: (id) => set((state) => ({
                todos: state.todos.map(todo =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                )
            })),

            removeTodo: (id) => set((state) => ({
                todos: state.todos.filter(todo => todo.id !== id)
            })),

            setFilter: (filter) => set({ filter }),

            fetchTodos: async () => {
                // Standard pattern: Set loading -> Fetch -> Set Data or Error
                set({ isLoading: true, error: null });
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
                    if (!res.ok) throw new Error('Failed to fetch');
                    const data = await res.json();
                    set({ todos: data, isLoading: false });
                } catch (error) {
                    set({ error: error.message, isLoading: false });
                }
            },

            reset: () => set({ todos: [], filter: 'all', error: null })
        }),
        {
            name: 'medium-storage', // Key name in localStorage
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({ todos: state.todos }), // Only persist 'todos', don't persist 'isLoading' or 'error'
        }
    )
);
