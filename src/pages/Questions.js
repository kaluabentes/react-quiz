import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Layout from "templates/Layout";
import PageTitle from "components/PageTitle";
import QuestionCard from "components/QuestionCard";
import QuizFinishDialog from "components/QuizFinishDialog";

import getListFrom from "utils/getListFrom";

import { saveQuizResult } from "store/modules/user/actions";

export default function Questions() {
  const { quizId } = useParams();
  const { quizzes } = useSelector((state) => state);
  const quiz = quizzes[quizId];
  const { questions: allQuestions } = useSelector((state) => state);
  const questions = allQuestions[quizId] && getListFrom(allQuestions[quizId]);
  const [answers, setAnswers] = useState({});
  const [hits, setHits] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(undefined);

  const handleCheckChange = (questionId, content) => {
    setAnswers({
      ...answers,
      [questionId]: content,
    });
  };

  const handleFinishClick = async () => {
    const answersList = Object.keys(answers);

    if (answersList.length !== questions.length) {
      setError("All the questions must be answered");
      return;
    }

    const reduceHits = (totalHits, questionId) => {
      const { correctAnswer } = allQuestions[quizId][questionId];

      if (correctAnswer === answers[questionId]) {
        return totalHits + 1;
      }

      return totalHits;
    };
    const questionHits = answersList.reduce(reduceHits, 0);

    setHits(questionHits);
    setIsDialogOpen(true);
    setError(undefined);
    dispatch(
      saveQuizResult({ quizId, result: `${questionHits}/${questions.length}` })
    );
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleBackClick = () => {
    history.push("/quizzes");
  };

  return (
    <Layout>
      <p>Quiz</p>
      <PageTitle>{quiz.title}</PageTitle>
      {questions && questions.length > 0 ? (
        <>
          {questions.map((question) => (
            <QuestionCard title={question.title}>
              {getListFrom(question.answers).map((answer) => (
                <Form.Group controlId={answer.id}>
                  <Form.Check
                    type="radio"
                    id={answer.id}
                    label={answer.content}
                    name={question.id}
                    onChange={() =>
                      handleCheckChange(question.id, answer.content)
                    }
                  />
                </Form.Group>
              ))}
            </QuestionCard>
          ))}
          {error && <Alert variant="danger">{error}</Alert>}
          <p style={{ textAlign: "center" }}>
            <Button variant="success" onClick={handleFinishClick}>
              Finish
            </Button>
          </p>
        </>
      ) : (
        <Alert variant="info">Nothing here :(</Alert>
      )}
      <QuizFinishDialog
        isOpen={isDialogOpen}
        totalHits={hits}
        totalQuestions={questions && questions.length}
        onClose={handleDialogClose}
        onBack={handleBackClick}
      />
    </Layout>
  );
}
