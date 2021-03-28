import create from "zustand";
import { devtools } from "zustand/middleware";
import { initContentModel, initLoadingModel } from "./data-models";

const [useStore] = create(
  devtools((set) => ({
    ...initContentModel(set),
    ...initLoadingModel(set),
  })),
  "smart-blocks-store"
);

export { useStore };
