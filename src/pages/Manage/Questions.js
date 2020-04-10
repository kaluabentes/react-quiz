import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Layout from "templates/Layout";
import PageTitle from "components/PageTitle";
import QuestionCard from "components/QuestionCard";
import QuestionWizard from "components/QuestionWizard";
import AnswerText from "components/AnswerText";

const questions = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    correctAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
    ],
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    correctAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
    ],
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    correctAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
    ],
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    correctAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
    ],
  },
];

export default function Questions() {
  const { id } = useParams();
  const { quizzes } = useSelector((state) => state);
  const quiz = quizzes[id];

  return (
    <Layout title="Quizzes">
      <small>{quiz.title}</small>
      <PageTitle>
        Manage questions <Button>Add question</Button>
      </PageTitle>
      {questions.map((question, index) => (
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
          {question.answers.map((answer) => (
            <AnswerText
              isCorrect={answer === question.correctAnswer}
              key={answer}
            >
              {answer}
            </AnswerText>
          ))}
        </QuestionCard>
      ))}
      <QuestionWizard isOpen={false} answers={questions[0].answers} />
    </Layout>
  );
}
