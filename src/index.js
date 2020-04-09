import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "App";
import * as serviceWorker from "utils/serviceWorker";
import store from "store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
