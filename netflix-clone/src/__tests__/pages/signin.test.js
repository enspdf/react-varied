import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { Signin } from "../../pages";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("I am signed in!")
    ),
  })),
};

describe("<Signin />", () => {
  it("renders the sign in page witha form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signin />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("Email address"), {
        target: { value: "email@mail.com" },
      });

      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password" },
      });

      fireEvent.click(getByTestId("sign-in"));

      expect(getByPlaceholderText("Email address").value).toBe(
        "email@mail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("password");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
