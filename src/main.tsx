import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

//* Con connect.
// import App from "./App";

//* Con hooks.
import AppHooks from "./AppHooks";

import "./css/index.css";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <AppHooks />
    </Provider>
  </React.StrictMode>
);
