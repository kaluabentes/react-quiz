import { createReducer } from "@reduxjs/toolkit";

import { createQuiz, updateQuiz, removeQuiz } from "./actions";

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [createQuiz]: (state, action) => {
    const { id, quiz } = action.payload;

    state[id] = quiz;
  },
  [updateQuiz]: (state, action) => {
    const { id, quiz } = action.payload;

    state[id] = quiz;
  },
  [removeQuiz]: (state, action) => {
    delete state[action.payload];
  },
});
