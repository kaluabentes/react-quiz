import { createAction } from "@reduxjs/toolkit";

export const createQuestion = createAction("@questions/create-question");

export const updateQuestion = createAction("@questions/update-question");

export const removeQuestion = createAction("@questions/remove-question");
