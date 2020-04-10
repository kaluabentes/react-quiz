import { combineReducers } from "redux";

import quizzes from "./quizzes/reducer";
import questions from "./questions/reducer";

export default combineReducers({
  quizzes,
  questions,
});
