import { content } from "../fallback";

const initContentModel = (set) => ({
  content,
  currentButtonText: content.button?.states?.initial,
  setButtonText: (buttonText) =>
    set((state) => ({ ...state, currentButtonText: buttonText })),
  getContent: () => {},
  setContent: (content) => {
    set((state) => ({ ...state, content }));
  },
});

const initLoadingModel = (set) => ({
  loading: false,
  processing: false,
  setLoading: () => {
    set((state) => ({ ...state, loading: true }));
  },
  clearLoading: () => {
    set((state) => ({ ...state, loading: false }));
  },
  setProcessing: () => {
    set((state) => ({ ...state, processing: true }));
  },
  clearProcessing: () => {
    set((state) => ({ ...state, processing: false }));
  },
});

export { initContentModel, initLoadingModel };
