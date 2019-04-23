import React from "react";
export const HeroHeader = ({ children, ...props }) => (
  <header className="hero-header has-text-centered" {...props}>
    {children}
  </header>
);
