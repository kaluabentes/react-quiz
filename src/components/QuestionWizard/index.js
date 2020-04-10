import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

const PROP_TYPES = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onInputChange: PropTypes.func,
  onAddAnswer: PropTypes.func,
  onAnswerChange: PropTypes.func,
  onAnswerRemove: PropTypes.func,
  title: PropTypes.string,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  correctAnswer: PropTypes.string,
  modalTitle: PropTypes.string,
};

const DEFAULT_PROPS = {
  isOpen: false,
  onClose: () => {},
  onSave: () => {},
  onInputChange: () => {},
  onAddAnswer: () => {},
  onAnswerChange: () => {},
  onAnswerRemove: () => {},
  title: "",
  answers: [],
  correctAnswer: "",
  modalTitle: "Question Wizard",
};

export default function QuestionWizard({
  isOpen,
  onClose,
  onSave,
  onInputChange,
  onAddAnswer,
  onAnswerChange,
  onAnswerRemove,
  modalTitle,
  title,
  answers,
  correctAnswer,
}) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            name="title"
            onChange={onInputChange}
            placeholder="Enter the title"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Answers</Form.Label>
          {answers.map((answer) => (
            <p>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="answer"
                  value={answer.content}
                  onChange={({ target: { value } }) =>
                    onAnswerChange(answer.id, value)
                  }
                />
                <InputGroup.Append>
                  <Button onClick={() => onAnswerRemove(answer.id)}>
                    Remove
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </p>
          ))}
          <p>
            <Button onClick={onAddAnswer}>Add</Button>
          </p>
        </Form.Group>

        <Form.Group controlId="correctAnswer">
          <Form.Label>Correct answer</Form.Label>
          <Form.Control
            type="text"
            value={correctAnswer}
            name="correctAnswer"
            onChange={onInputChange}
            placeholder="Enter the correct answer"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

QuestionWizard.propTypes = PROP_TYPES;
QuestionWizard.defaultProps = DEFAULT_PROPS;
