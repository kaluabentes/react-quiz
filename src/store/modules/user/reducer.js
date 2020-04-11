import { createReducer } from "@reduxjs/toolkit";

import { saveQuizResult } from "./actions";

const INITIAL_STATE = {
  quizzes: {},
};

export default createReducer(INITIAL_STATE, {
  [saveQuizResult]: (state, action) => {
    const { quizId, result } = action.payload;

    state.quizzes[quizId] = result;
  },
});
