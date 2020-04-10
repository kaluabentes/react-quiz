import React from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "templates/Layout";
import PageTitle from "components/PageTitle";

import getListFrom from "utils/getListFrom";

export default function Quizzes() {
  const quizzes = useSelector((state) => getListFrom(state.quizzes));
  const history = useHistory();

  const redirectToQuestions = (id) => {
    history.push(`/quizzes/${id}`);
  };

  return (
    <Layout>
      <PageTitle>Quizzes</PageTitle>
      {quizzes.length > 0 ? (
        <Table bordered>
          <thead>
            <tr>
              <th>Title</th>
              <th>Last Attempt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr>
                <td>{quiz.title}</td>
                <td>
                  <strong>20</strong> / 30 Hits
                </td>
                <td>
                  <Button onClick={() => redirectToQuestions(quiz.id)}>
                    Start
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert variant="info">Nothing here :(</Alert>
      )}
    </Layout>
  );
}
