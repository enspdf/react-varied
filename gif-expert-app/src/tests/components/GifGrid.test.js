import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import React from "react";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Test <GifGrid/>", () => {
  const category = "Spiderman";

  it("Should show the component", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should show items when loads images", () => {
    const images = [
      {
        id: 12,
        url: "https://example.com/image.png",
        title: "sample title",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: images,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(images.length);
  });
});
