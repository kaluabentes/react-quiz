import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";

import { APP_NAME } from "config/app";
import routes from "config/routes";

const PROP_TYPES = {
  children: PropTypes.node.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ),
};

const DEFAULT_PROPS = {
  navItems: [],
};

export default function Layout({ title, children }) {
  let history = useHistory();

  const handleNavItemClick = (path) => {
    history.push(path);
  };

  return (
    <>
      <Helmet>
        <title>{title ? `${title} - ${APP_NAME}` : APP_NAME}</title>
      </Helmet>
      <Header
        title={title}
        navItems={routes}
        onNavItemClick={handleNavItemClick}
      />
      <Main>{children}</Main>
      <Footer>{APP_NAME}</Footer>
    </>
  );
}

Layout.propTypes = PROP_TYPES;
Layout.defaultProps = DEFAULT_PROPS;
