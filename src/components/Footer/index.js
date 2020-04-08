import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import styles from "./styles.module.css";

const PROP_TYPES = {
  children: PropTypes.node.isRequired,
};

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <Container>
        &copy; {children} {new Date().getFullYear()} - All rights reserved.
      </Container>
    </footer>
  );
}

Footer.propTypes = PROP_TYPES;
