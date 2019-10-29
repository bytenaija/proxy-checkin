import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Homepage from "./views/HomePage";

const App = () => (
  <Provider store={store}>
    <Homepage />
  </Provider>
);

export default App;
