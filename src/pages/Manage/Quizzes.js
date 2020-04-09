import React from "react";
import { Table, Button } from "react-bootstrap";

import Layout from "templates/Layout";
import PageTitle from "components/PageTitle";

const quizzes = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Quizzes() {
  return (
    <Layout title="Quizzes">
      <PageTitle>Manage quizzes</PageTitle>
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
                <Button>Edit</Button>&nbsp;
                <Button>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}
