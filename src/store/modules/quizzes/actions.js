import { createAction } from "@reduxjs/toolkit";

export const createQuiz = createAction("@quizzes/create-quiz");

export const updateQuiz = createAction("@quizzes/update-quiz");

export const removeQuiz = createAction("@quizzes/remove-quiz");
