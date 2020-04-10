import React from "react";

import Home from "pages/Home";
import Quizzes from "pages/Quizzes";
import AdminQuizzes from "pages/admin/Quizzes";
import AdminQuestions from "pages/admin/Questions";

export default [
  {
    label: "Home",
    path: "/",
    component: <Home />,
  },
  {
    label: "Quizzes",
    path: "/quizzes",
    component: <Quizzes />,
  },
  {
    label: "Admin",
    path: "/admin/quizzes",
    component: <AdminQuizzes />,
  },
  {
    path: "/admin/quizzes/:quizId",
    component: <AdminQuestions />,
    isNotNavItem: true,
  },
];
