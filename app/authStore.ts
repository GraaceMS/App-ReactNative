import { create } from "zustand";

type UserState = {
  user: { token: string; [key: string]: any } | null;
  setUser: (user: { token: string; [key: string]: any }) => void;
  clearUser: () => void;
};

const useAuthStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useAuthStore;
