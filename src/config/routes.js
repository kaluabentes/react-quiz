import React from "react";

import Home from "pages/Home";
import AdminQuizzes from "pages/admin/Quizzes";
import AdminQuestions from "pages/admin/Questions";

export default [
  {
    label: "Home",
    path: "/",
    component: <Home />,
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
