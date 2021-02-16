import logo from "./logo.svg";
import "./App.css";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";

const ToggleMachine = Machine({
  initial: "disabled",
  states: {
    enabled: {
      on: {
        DISABLE: "disabled",
      },
    },
    disabled: {
      on: {
        ENABLE: "enabled",
      },
    },
  },
});

function App() {
  const [state, send] = useMachine(ToggleMachine);

  return (
    <div className="App">
      <p>The current state is {state.value}</p>
      <button onClick={() => send("ENABLE")}>Enable</button>
      <button onClick={() => send("DISABLE")}>Disable</button>
      <button onClick={() => send("LOLLL")}>LOLLL</button>
    </div>
  );
}

export default App;
