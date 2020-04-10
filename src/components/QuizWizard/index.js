import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form } from "react-bootstrap";

const PROP_TYPES = {
  isOpen: PropTypes.string,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onInputChange: PropTypes.func,
  title: PropTypes.string,
  modalTitle: PropTypes.string,
};

const DEFAULT_PROPS = {
  isOpen: false,
  onClose: () => {},
  onSave: () => {},
  onInputChange: () => {},
  title: "",
  modalTitle: "Question Wizard",
};

export default function QuizWizard({
  isOpen,
  onClose,
  onSave,
  modalTitle,
  onInputChange,
  title,
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

QuizWizard.propTypes = PROP_TYPES;
QuizWizard.defaultProps = DEFAULT_PROPS;
