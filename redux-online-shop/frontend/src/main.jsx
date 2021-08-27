import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer from "./features/productSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
