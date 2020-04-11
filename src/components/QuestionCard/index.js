import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import styles from "./styles.module.css";

const PROP_TYPES = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.element,
};

const DEFAULT_PROPS = {
  title: "",
  footer: undefined,
};

export default function QuestionCard({ title, children, footer }) {
  return (
    <div className={styles.container}>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>{children}</Card.Body>
        {footer && <Card.Footer>{footer}</Card.Footer>}
      </Card>
    </div>
  );
}

QuestionCard.propTypes = PROP_TYPES;
QuestionCard.defaultProps = DEFAULT_PROPS;
