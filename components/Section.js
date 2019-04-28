import React from "react";
import cx from "classnames";
export const Section = ({ className, ...props }) => {
  const classes = cx("section", className);
  return <section className={classes} {...props} />;
};
