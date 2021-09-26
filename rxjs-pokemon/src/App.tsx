import { useMemo, useState } from "react";
import { useObservableState } from "observable-hooks";

import "./App.css";

import { pokemon$, selected$, deck$ } from "./store";

const Deck = () => {
  const deck = useObservableState(deck$, []);

  return (
    <div>
      <h4>Deck</h4>
      <div>
        {deck.map((p) => (
          <div key={p.id} style={{ display: "flex" }}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.name}
            />
            <div>
              <div>{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const pokemon = useObservableState(pokemon$, []);

  const filteredPokemon = useMemo(() => {
    return pokemon.filter((p) => p.name.toLowerCase().includes(search));
  }, [pokemon, search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredPokemon.map((p) => (
          <div key={p.name}>
            <strong>
              <input
                type="checkbox"
                checked={p.selected}
                onChange={() => {
                  if (selected$.value.includes(p.id)) {
                    selected$.next(selected$.value.filter((id) => id !== p.id));
                  } else {
                    selected$.next([...selected$.value, p.id]);
                  }
                }}
              />
              {p.name} - {p.power}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Search />
      <Deck />
    </div>
  );
};

export default App;
