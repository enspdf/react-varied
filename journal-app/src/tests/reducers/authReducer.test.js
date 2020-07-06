import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Test AuthReducer", () => {
  it("Should do the login", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: "uid",
        displayName: "name",
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: "uid",
      name: "name",
    });
  });

  it("Should do the logout", () => {
    const initState = { uid: "uid", displayName: "name" };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  it("Should return the current state", () => {
    const initState = { uid: "uid", displayName: "name" };
    const action = {
      type: "unknown",
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
