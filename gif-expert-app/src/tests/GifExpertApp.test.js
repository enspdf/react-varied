import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import React from "react";

import { GifExpertApp } from "../GifExpertApp";

describe("Test <GifExpertApp/>", () => {
  it("Should show the component", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should show a categories list", () => {
    const categories = ["First", "Second"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
