import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Layout from "templates/Layout";

export default function Index() {
  let history = useHistory();

  const handleStartButtonClick = () => {
    history.push("/quizzes");
  };

  return (
    <Layout title="Home">
      <Jumbotron>
        <h1>Test your knowledge!</h1>
        <p>
          With our quizzes you can test and be confident about what you is
          learning.
        </p>
        <p>
          <Button onClick={handleStartButtonClick} variant="primary">
            Start tests
          </Button>
        </p>
      </Jumbotron>
    </Layout>
  );
}
