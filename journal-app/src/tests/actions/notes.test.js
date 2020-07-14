import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
} from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: "uid",
  },
};
let store = mockStore(initState);

describe("Test notes actions", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  it("Should create a new note startNewNote", async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    const docId = actions[0].payload.id;
    await db.doc(`uid/journal/notes/${docId}`).delete();
  });

  it("startLoadingNotes should load notes", async () => {
    await store.dispatch(startLoadingNotes("uid"));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  it("startSaveNote should update the note", async () => {
    const note = {
      id: "CLSMzemO36KcZFtqZfMc",
      title: "Title",
      body: "body",
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();
    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`/uid/journal/notes/${note.id}`).get();

    expect(docRef.data().title).toBe(note.title);
  });
});
