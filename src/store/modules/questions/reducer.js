import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { createQuestion, updateQuestion, removeQuestion } from "./actions";

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [createQuestion]: (state, action) => {
    const { quizId, question } = action.payload;

    state[quizId] = {
      ...state[quizId],
      [uuidv4()]: question,
    };
  },
  [updateQuestion]: (state, action) => {
    const { quizId, id, question } = action;

    state[quizId][id] = question;
  },
  [removeQuestion]: (state, action) => {
    const { quizId, id } = action;

    delete state[quizId][id];
  },
});
