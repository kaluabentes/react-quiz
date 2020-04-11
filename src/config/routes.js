import React from "react";

import Home from "pages/Home";
import Quizzes from "pages/Quizzes";
import Questions from "pages/Questions";
import AdminQuizzes from "pages/admin/Quizzes";
import AdminQuestions from "pages/admin/Questions";

const routes = [];

routes.push({
  label: "Home",
  path: "/",
  component: <Home />,
});

routes.push({
  label: "Quizzes",
  path: "/quizzes",
  component: <Quizzes />,
});

routes.push({
  path: "/quizzes/:quizId",
  component: <Questions />,
  isNotNavItem: true,
});

routes.push({
  label: "Admin",
  path: "/admin/quizzes",
  component: <AdminQuizzes />,
});

routes.push({
  path: "/admin/quizzes/:quizId",
  component: <AdminQuestions />,
  isNotNavItem: true,
});

export default routes;
