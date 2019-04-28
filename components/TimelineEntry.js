import { Media } from "reactstrap";
import React from "react";
import cx from "classnames";

export const TimelineEntry = ({ src, children, left = true }) => {
  const classes = cx(
    ["d-sm-flex", "justify-content-space-between", "align-items-center"],
    {
      "flex-row-reverse": left
    }
  );
  const image = (
    <div className="image is-256x256 m-auto">
      <img className="rounded-circle" src={src} alt="" />
    </div>
  );
  const content = (
    <div className="text-center mx-4">
      <h4>{children}</h4>
    </div>
  );
  return (
    <div className={classes}>
      <div className="my-3 my-md-0">{image}</div>
      {content}
    </div>
  );
};
