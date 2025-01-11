import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      name: null,
      isLoggedIn: false,
      setName: (name) => set({ name }),
      setLoggedIn: (value) => set({ isLoggedIn: value }),
    }),
    {
      name: 'user-store', 
      getStorage: () => localStorage, 
    }
  )
);

export default useUserStore;
