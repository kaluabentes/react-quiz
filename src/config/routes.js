import React from "react";

import Home from "pages/Home";
import ManageQuizzes from "pages/manage/Quizzes";
import ManageQuestions from "pages/manage/Questions";

export default [
  {
    label: "Home",
    path: "/",
    component: <Home />,
  },
  {
    label: "Manage",
    path: "/manage/quizzes",
    component: <ManageQuizzes />,
  },
  {
    path: "/manage/quizzes/:id",
    component: <ManageQuestions />,
    isNotNavItem: true,
  },
];
