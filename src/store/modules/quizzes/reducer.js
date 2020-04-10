import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import {
  createQuiz,
  updateQuiz,
  removeQuiz,
  createQuestion,
  updateQuestion,
  removeQuestion,
} from "./actions";

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [createQuiz]: (state, action) => {
    const { id, quiz } = action.payload;

    state[id] = {
      ...quiz,
      questions: {},
    };
  },
  [updateQuiz]: (state, action) => {
    const { id, quiz } = action.payload;

    state[id] = quiz;
  },
  [removeQuiz]: (state, action) => {
    delete state[action.payload];
  },
  [createQuestion]: (state, action) => {
    const { id, question } = action.payload;

    state[id].questions[uuidv4()] = question;
  },
  [updateQuestion]: (state, action) => {
    const { id, quizId, question } = action.payload;

    state[quizId].questions[id] = question;
  },
  [removeQuestion]: (state, action) => {
    const { id, quizId } = action.payload;

    delete state[quizId].questions[id];
  },
});
