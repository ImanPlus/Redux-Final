import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/rootReducer";

import App from "./Component/App";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
