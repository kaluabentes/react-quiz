import { combineReducers } from "redux";

import quizzes from "./modules/quizzes/reducer";
import questions from "./modules/questions/reducer";
import user from "./modules/user/reducer";

export default combineReducers({
  quizzes,
  questions,
  user,
});
