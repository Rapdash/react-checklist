import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "./redux/store";

export const App = () => {
  return (
    <Provider store={configureStore()}>
      <div></div>
    </Provider>
  );
};
