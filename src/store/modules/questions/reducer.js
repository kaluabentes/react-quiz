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
    const { quizId, questionId, question } = action.payload;

    state[quizId][questionId] = question;
  },
  [removeQuestion]: (state, action) => {
    const { quizId, questionId } = action.payload;

    delete state[quizId][questionId];
  },
});
