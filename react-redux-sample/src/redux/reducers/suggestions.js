import { type as findSuggestionsType } from "../actions/findsuggestions";
import items from "../../data/items";

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case findSuggestionsType: {
      const regex = new RegExp(`^${payload}`, "i");

      return items.filter((n) => regex.test(n.title));
    }
    default:
      return state;
  }
}

export default reducer;
