import create from "zustand";

const [useLoadingStore] = create((set) => ({
  isLoading: false,
  showLoading: () => set({ isLoading: true }),
  hideLoading: () => set({ isLoading: false }),
}));

export default useLoadingStore;
