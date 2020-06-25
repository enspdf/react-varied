import "@testing-library/jest-dom";

import { renderHook } from "@testing-library/react-hooks";

import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test useFetchGifs hook", () => {
  it("Should return the initial state", async () => {
    const category = "Category";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  it("Should return an array of images and loading in false", async () => {
    const category = "Category";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
