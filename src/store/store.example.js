// store/useMyStore.js
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

/* =====================================================
   STORE
   ===================================================== */

const useMyStore = create(
  devtools(
    persist(
      (set, get) => ({
        /* --------------------
           STATE
           -------------------- */
        count: 1,
        name: "test",

        /* --------------------
           ACTIONS
           -------------------- */

        // increase count by 1
        increment: () =>
          set(
            (state) => ({ count: state.count + 1 }),
            false,
            "count/increment"
          ),

        // capitalize first letter of name
        capitalizeName: () => {
          const { name } = get();
          set(
            { name: name.charAt(0).toUpperCase() + name.slice(1) },
            false,
            "name/capitalize"
          );
        },

        // clear storage + reset state
        resetStore: () => {
          // Zustand built-in way to clear persisted data
          useMyStore.persist.clearStorage();

          // reset in-memory state
          set({ count: 1, name: "test" }, false, "store/reset");
        },
      }),
      {
        /* --------------------
           PERSIST CONFIG
           -------------------- */

        // key used in storage
        name: "my-store",

        // 👇 use sessionStorage instead of localStorage
        storage: createJSONStorage(() => sessionStorage),

        // only persist these values
        partialize: (state) => ({
          count: state.count,
          name: state.name,
        }),
      }
    )
  )
);

export default useMyStore;

/* =====================================================
   USAGE EXAMPLE (React)
   ===================================================== */

/*
import useMyStore from "./store/useMyStore";

function Example() {
  const count = useMyStore((s) => s.count);
  const name = useMyStore((s) => s.name);

  const increment = useMyStore((s) => s.increment);
  const capitalizeName = useMyStore((s) => s.capitalizeName);
  const resetStore = useMyStore((s) => s.resetStore);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={capitalizeName}>Capitalize Name</button>
      <button onClick={resetStore}>Reset Store</button>
    </div>
  );
}

export default Example;
*/

/* =====================================================
   DOCUMENTATION (Simple Words)
   =====================================================

WHAT THIS STORE DOES
--------------------
• Stores `count` and `name`
• Saves data in sessionStorage
• Data survives page refresh
• Data is deleted when tab/browser closes

WHY sessionStorage?
-------------------
sessionStorage = temporary memory

✔ Refresh page → data stays
❌ Close tab → data gone
❌ Close browser → data gone

Good for:
• logged-in sessions
• admin dashboards
• sensitive temporary data

HOW DATA IS SAVED
-----------------
Zustand automatically:
1. Saves state to sessionStorage on change
2. Restores state when app loads

You do NOT write storage code manually.

HOW TO CLEAR DATA
-----------------
Call:
useMyStore.persist.clearStorage()

OR use the provided:
resetStore()

WHEN TO USE resetStore
----------------------
• logout
• switch user
• reset app state

DEVTOOLS
--------
Redux DevTools works:
• see actions
• time travel
• debug easily

KEY TAKEAWAY
------------
Change storage = change ONE line:
storage: createJSONStorage(() => sessionStorage)

Everything else stays the same.
*/
