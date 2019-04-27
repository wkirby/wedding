import React from "react";

export const Title = ({ size = 3, ...props }) => (
  <h1 className={`display-${size}`} {...props} />
);

export const Subtitle = ({ size = 2, ...props }) => (
  <h2 className={`h${size}`} {...props} />
);
