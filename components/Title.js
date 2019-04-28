import React from "react";
import cx from "classnames";

export const Title = ({ size = 3, priority=1, className, ...props }) => {
  const HeadingTag = `h${priority}`;
  const classes = cx("title", `display-${size}`, className);
  return <HeadingTag className={classes} {...props} />;
};

export const Subtitle = ({ size = 2, priority=2, className, ...props }) => {
  const HeadingTag = `h${priority}`;
  const classes = cx("subtitle", `h${size}`, className);
  return <HeadingTag className={classes} {...props} />;
};
