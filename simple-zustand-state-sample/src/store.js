import { create } from "zustand";

export const [useState] = create((set) => ({
  count: 0,
  increase: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
}));
