import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

const PROP_TYPES = {
  isOpen: PropTypes.string,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  title: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.string),
  correctAnswer: PropTypes.string,
};

const DEFAULT_PROPS = {
  isOpen: false,
  onClose: () => {},
  onSave: () => {},
  title: "",
  answers: [],
  correctAnswer: "",
};

export default function QuestionWizard({
  isOpen,
  onClose,
  onSave,
  title,
  answers,
  correctAnswer,
}) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Question Wizard</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            name="title"
            placeholder="Enter the title"
          />
        </Form.Group>

        <Form.Group controlId="answer">
          <Form.Label>Answers</Form.Label>
          {answers.map((answer) => (
            <p>
              <InputGroup>
                <Form.Control type="text" name="answer" value={answer} />
                <InputGroup.Append>
                  <Button>Remove</Button>
                </InputGroup.Append>
              </InputGroup>
            </p>
          ))}
          <p>
            <Button>Add</Button>
          </p>
        </Form.Group>

        <Form.Group controlId="title">
          <Form.Label>Correct answer</Form.Label>
          <Form.Control
            type="text"
            value={correctAnswer}
            name="title"
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
