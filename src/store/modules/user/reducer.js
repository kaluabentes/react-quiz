import { createReducer } from "@reduxjs/toolkit";

import { addQuizResult } from "./actions";

const INITIAL_STATE = {
  quizzes: {},
};

export default createReducer(INITIAL_STATE, {
  [addQuizResult]: (state, action) => {
    const { quizId, result } = action.payload;

    state.quizzes[quizId] = result;
  },
});
