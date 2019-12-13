import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";

import { verifyAuth } from "./actions";
import { rootReducer } from "./reducers";

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  store.dispatch(verifyAuth()); // Checks for auth state
  return store;
};
