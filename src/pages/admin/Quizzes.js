import React, { useState } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Layout from "templates/Layout";
import PageTitle from "components/PageTitle";
import QuizWizard from "components/QuizWizard";

import {
  createQuiz,
  updateQuiz,
  removeQuiz,
} from "store/modules/quizzes/actions";

import getListFrom from "utils/getListFrom";

export default function Quizzes() {
  const quizzesMap = useSelector((state) => state.quizzes);
  const quizzes = getListFrom(quizzesMap);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardTitle, setWizardTitle] = useState("");
  const [quiz, setQuiz] = useState({ title: "" });
  const [wizardMode, setWizardMode] = useState("");
  const [quizId, setQuizId] = useState(undefined);
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(undefined);

  const redirectToQuiz = (id) => {
    history.push(`/admin/quizzes/${id}`);
  };

  const handleCreateClick = () => {
    setWizardMode("create");
    setWizardTitle("Create quiz");
    setIsWizardOpen(true);
  };

  const handleSaveClick = () => {
    if (quiz.title.length < 1) {
      setError(
        <span>
          The <strong>title</strong> field is required
        </span>
      );
      return;
    }

    if (wizardMode === "create") {
      const id = uuidv4();

      dispatch(createQuiz({ id, quiz }));
    }

    if (wizardMode === "update") {
      dispatch(updateQuiz({ id: quizId, quiz }));
    }

    setIsWizardOpen(false);
    setError(undefined);
    setQuiz({ title: "" });
  };

  const handleCloseClick = () => {
    setIsWizardOpen(false);
  };

  const handleInputChange = (event) => {
    setQuiz({ title: event.target.value });
  };

  const handleEditClick = (id) => {
    const quiz = quizzesMap[id];

    setWizardMode("update");
    setQuiz(quiz);
    setQuizId(id);
    setWizardTitle("Editar quiz");
    setIsWizardOpen(true);
  };

  const handleRemoveClick = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeQuiz(id));
    }
  };

  return (
    <Layout title="Quizzes">
      <PageTitle>
        Quizzes <Button onClick={handleCreateClick}>Create</Button>
      </PageTitle>
      {quizzes.length > 0 ? (
        <Table bordered>
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr>
                <td>{quiz.title}</td>
                <td>
                  <Button onClick={() => redirectToQuiz(quiz.id)}>
                    Questions
                  </Button>
                  &nbsp;
                  <Button onClick={() => handleEditClick(quiz.id)}>Edit</Button>
                  &nbsp;
                  <Button onClick={() => handleRemoveClick(quiz.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert variant="info">Nothing here :(</Alert>
      )}
      <QuizWizard
        isOpen={isWizardOpen}
        modalTitle={wizardTitle}
        title={quiz.title}
        onSave={handleSaveClick}
        onClose={handleCloseClick}
        onInputChange={handleInputChange}
        error={error}
      />
    </Layout>
  );
}
