import { createStore } from "redux";
import throttle from "lodash/throttle";

import rootReducer from "./rootReducer";
import { loadState, saveState } from "utils/localStorage";

const store = createStore(
  rootReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Persist state on localStorage
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
