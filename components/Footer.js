import React from "react";
import { Container } from "reactstrap";
import cx from "classnames";

export const Footer = ({ children, className, ...props }) => {
  const classes = cx("footer", className);

  return (
    <footer className={classes} {...props}>
      <Container>{children}</Container>
    </footer>
  );
};
