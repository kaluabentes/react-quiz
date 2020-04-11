import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

import styles from "./styles.module.css";

const PROP_TYPES = {
  isOpen: PropTypes.bool,
  onBack: PropTypes.func,
  onClose: PropTypes.func,
  totalHits: PropTypes.number,
  totalQuestions: PropTypes.number,
};

const DEFAULT_PROPS = {
  isOpen: true,
  onBack: () => {},
  onClose: () => {},
  totalHits: 0,
  totalQuestions: 0,
};

export default function QuizFinishDialog({
  isOpen,
  onBack,
  onClose,
  totalHits,
  totalQuestions,
}) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Body>
        <div className={styles.content}>
          <h2>Quiz Finished</h2>
          <p>
            Your score is: <strong>{totalHits}</strong>/{totalQuestions} hits
          </p>
          <Button onClick={onBack}>Back to quizzes</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

QuizFinishDialog.propTypes = PROP_TYPES;
QuizFinishDialog.defaultProps = DEFAULT_PROPS;
