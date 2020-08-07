import React from "react";
import { useState } from "./store";

export default function App() {
  const { count, increase } = useState();

  return (
    <>
      count: {count}
      <button onClick={increase}>Increase</button>
    </>
  );
}
