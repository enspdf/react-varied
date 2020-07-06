const { types } = require("../../types/types");

describe("Types Tests", () => {
  it("Should have this types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",
      uiStartLoading: "[UI] Start Loading",
      uiFinishLoading: "[UI] Finish Loading",
      notesAddNew: "[Notes] New Note",
      notesActive: "[Notes] Set Active Note",
      notesLoad: "[Notes] Load Notes",
      notesUpdated: "[Notes] Updated Note",
      notesFileUrl: "[Notes] Updated Image Url",
      notesDelete: "[Notes] Delete Note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    });
  });
});
