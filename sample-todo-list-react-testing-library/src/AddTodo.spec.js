import React from "react";
import { render, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import AddTodo from "./AddTodo";

it("should accepts values for the new todo", () => {
  const mockAddTodo = jest.fn();
  const { debug, getByLabelText, getByText } = render(
    <AddTodo addTodo={mockAddTodo} />
  );
  const Input = getByLabelText(/add todo/i);
  //   fireEvent.change(Input, { target: { value: "a new todo" } });
  user.type(Input, "a new todo");
  expect(Input.value).toContain("a new todo");
  expect(Input).toHaveValue("a new todo");

  const SubmitBtn = getByText(/add todo/i);
  //   fireEvent.click(SubmitBtn);
  user.click(SubmitBtn);
  expect(mockAddTodo).toHaveBeenCalled();
  expect(mockAddTodo).toHaveBeenCalledTimes(1);
  debug();
});
