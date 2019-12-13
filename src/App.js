import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "./redux/store";

const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
};
