import React from "react";
import cx from "classnames";
export const Image = ({ ratio, className, src, ...props }) => {
  const classes = cx("image", { [`is-${ratio}`]: !!ratio }, className);
  return (<figure className={classes} {...props}>
    <img src={src} />
  </figure>);
};
