import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import styles from "./styles.module.css";

const PROP_TYPES = {
  children: PropTypes.node.isRequired,
  isCorrect: PropTypes.bool,
};

const DEFAULT_PROPS = {
  isCorrect: false,
};

export default function AnswerText({ children, isCorrect }) {
  return (
    <Card.Text>
      <span className={isCorrect && styles.linethrough}>{children}</span>
    </Card.Text>
  );
}

AnswerText.propTypes = PROP_TYPES;
AnswerText.defaultProps = DEFAULT_PROPS;
