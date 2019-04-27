import React from "react";
import { Container } from "reactstrap";

export const Footer = ({ children, ...props }) => {
  return (
    <footer className="footer" {...props}>
      <Container>{children}</Container>
    </footer>
  );
};
