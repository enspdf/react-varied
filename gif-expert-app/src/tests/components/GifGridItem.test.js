import { shallow } from "enzyme";
import React from "react";

import { GifGridItem } from "../../components/GifGridItem";

describe("Test <GifGridItem/>", () => {
  const title = "Sample Title";
  const url = "http://localhost/image.png";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  it("Should show the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should have a paragraph with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  it("Should have an image sent in props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  it("Should have an animate__fadeIn class", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
