import React from "react";
import { App } from "../App";
import { render, cleanup, waitForElement } from "@testing-library/react";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";

beforeEach(cleanup);

jest.mock("../hooks/useInfiniteScroll.js");
jest.mock("../services/hnApi.js", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test("renders the application", async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));

  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<App />);
  await waitForElement(() => [
    expect(getByText("Hacker News Stories")).toBeTruthy(),
    expect(getByText("Singular Story")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: Username"),
  ]);
});
