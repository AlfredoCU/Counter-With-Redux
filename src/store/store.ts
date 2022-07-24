import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { counterReducer } from "./reducers/counterReducer";

const reducers = combineReducers({
  counter: counterReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
