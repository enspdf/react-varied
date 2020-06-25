import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import React from "react";

import { AddCategory } from "../../components/AddCategory";

describe("Test <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  it("Should show the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should change the input value", () => {
    const input = wrapper.find("input");
    const value = "Spiderman";
    input.simulate("change", { target: { value } });
  });

  it("Should not post the information with submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  it("Should call setCategories and clear input", () => {
    const input = wrapper.find("input");
    const value = "Spiderman";
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
