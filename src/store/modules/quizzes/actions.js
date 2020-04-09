import { createAction } from "@reduxjs/toolkit";

export const createQuiz = createAction("@quizzes/create-quiz");
export const updateQuiz = createAction("@quizzes/create-quiz");
export const removeQuiz = createAction("@quizzes/remove-quiz");

export const createQuestion = createAction("@quizzes/create-question");
export const updateQuestion = createAction("@quizzes/update-question");
export const removeQuestion = createAction("@quizzes/remove-question");
