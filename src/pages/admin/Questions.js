import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Layout from "templates/Layout";
import PageTitle from "components/PageTitle";
import QuestionCard from "components/QuestionCard";
import QuestionWizard from "components/QuestionWizard";
import AnswerText from "components/AnswerText";

import {
  createQuestion,
  updateQuestion,
  removeQuestion,
} from "store/modules/questions/actions";

import getListFrom from "utils/getListFrom";

export default function Questions() {
  const { quizId } = useParams();
  const { quizzes, questions: questionsMap } = useSelector((state) => state);
  const quiz = quizzes[quizId];
  const questions = questionsMap[quizId] && getListFrom(questionsMap[quizId]);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [question, setQuestion] = useState({ title: "", correctAnswer: "" });
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();
  const [wizardMode, setWizardMode] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [error, setError] = useState(undefined);

  const handleCreateClick = () => {
    setWizardMode("create");
    setIsWizardOpen(true);
  };

  const handleInputChange = (event) => {
    setQuestion({
      ...question,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddAnswer = () => {
    setAnswers({
      ...answers,
      [uuidv4()]: {
        content: "",
      },
    });
  };

  const handleAnswerChange = (id, value) => {
    setAnswers({
      ...answers,
      [id]: {
        content: value,
      },
    });
  };

  const handleSaveClick = () => {
    const payload = {
      ...question,
      answers,
    };

    if (question.title.length < 1) {
      setError(
        <span>
          The <strong>title</strong> field is required
        </span>
      );
      return;
    }

    if (Object.keys(answers).length < 4) {
      setError(
        <span>
          Need at least <strong>4 answers</strong> to be added
        </span>
      );
      return;
    }

    if (question.correctAnswer.length < 1) {
      setError(
        <span>
          The <strong>correct answer</strong> field is required
        </span>
      );
      return;
    }

    if (wizardMode === "create") {
      dispatch(createQuestion({ quizId, question: payload }));
    }

    if (wizardMode === "update") {
      dispatch(updateQuestion({ quizId, questionId, question: payload }));
    }

    setIsWizardOpen(false);
    setAnswers({});
    setQuestion({ title: "", correctAnswer: "" });
    setWizardMode("");
    setError(undefined);
  };

  const handleEditClick = (id) => {
    setWizardMode("update");
    setQuestion(questionsMap[quizId][id]);
    setAnswers(questionsMap[quizId][id].answers);
    setQuestionId(id);
    setIsWizardOpen(true);
  };

  const handleAnswerRemove = (answerId) => {
    const newAnswers = { ...answers };

    delete newAnswers[answerId];
    setAnswers(newAnswers);
  };

  const handleRemoveClick = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeQuestion({ quizId, questionId: id }));
    }
  };

  const handleCloseClick = () => {
    setIsWizardOpen(false);
  };

  return (
    <Layout title="Quizzes">
      <p>{quiz.title}</p>
      <PageTitle>
        Questions <Button onClick={handleCreateClick}>Add question</Button>
      </PageTitle>
      {questions && questions.length > 0 ? (
        questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            title={`Question #${index + 1}`}
            footer={
              <>
                <Button onClick={() => handleEditClick(question.id)}>
                  Editar
                </Button>
                &nbsp;&nbsp;
                <Button onClick={() => handleRemoveClick(question.id)}>
                  Remove
                </Button>
              </>
            }
          >
            <Card.Title>{question.title}</Card.Title>
            {getListFrom(question.answers).map((answer) => (
              <AnswerText
                isCorrect={answer.content === question.correctAnswer}
                key={answer.id}
              >
                {answer.content}
              </AnswerText>
            ))}
          </QuestionCard>
        ))
      ) : (
        <Alert variant="info">Nothing here :(</Alert>
      )}
      <QuestionWizard
        isOpen={isWizardOpen}
        title={question.title}
        answers={getListFrom(answers)}
        correctAnswer={question.correctAnswer}
        onInputChange={handleInputChange}
        onAddAnswer={handleAddAnswer}
        onAnswerChange={handleAnswerChange}
        onAnswerRemove={handleAnswerRemove}
        onSave={handleSaveClick}
        onClose={handleCloseClick}
        error={error}
      />
    </Layout>
  );
}
