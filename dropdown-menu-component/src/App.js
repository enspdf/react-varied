import React from "react";
import "./App.scss";
import Dropdown from "./Dropdown";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blde Runner 2049",
  },
];

function App() {
  return (
    <div className="container">
      <Dropdown title="Select movie" items={items} />
      <Dropdown title="Select movie" items={items} multiSelect={true} />
    </div>
  );
}

export default App;
