import React from "react";

import Home from "pages/Home";
import ManageQuizzes from "pages/Manage/Quizzes";

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
];
