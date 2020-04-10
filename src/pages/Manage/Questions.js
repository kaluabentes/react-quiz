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

import { createQuestion } from "store/modules/questions/actions";

import { getQuestions, getAnswers } from "./utils";

export default function Questions() {
  const { id } = useParams();
  const { quizzes, questions: questionsMap } = useSelector((state) => state);
  const quiz = quizzes[id];
  const questions = getQuestions(questionsMap, id);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [question, setQuestion] = useState({ title: "", correctAnswer: "" });
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();

  const handleCreateClick = () => {
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
      [uuidv4()]: "",
    });
  };

  const handleAnswerChange = (id, value) => {
    setAnswers({
      ...answers,
      [id]: value,
    });
  };

  const handleSaveClick = () => {
    const payload = {
      ...question,
      answers,
    };
    dispatch(createQuestion({ quizId: id, question: payload }));
    setIsWizardOpen(false);
  };

  return (
    <Layout title="Quizzes">
      <small>{quiz.title}</small>
      <PageTitle>
        Manage questions{" "}
        <Button onClick={handleCreateClick}>Add question</Button>
      </PageTitle>
      {questions ? (
        questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            title={`Question #${index + 1}`}
            footer={
              <>
                <Button>Editar</Button>&nbsp;&nbsp;
                <Button>Remove</Button>
              </>
            }
          >
            <Card.Title>{question.title}</Card.Title>
            {getAnswers(question.answers).map((answer) => (
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
        answers={getAnswers(answers)}
        correctAnswer={question.correctAnswer}
        onInputChange={handleInputChange}
        onAddAnswer={handleAddAnswer}
        onAnswerChange={handleAnswerChange}
        onSave={handleSaveClick}
      />
    </Layout>
  );
}
