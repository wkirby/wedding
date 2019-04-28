import React from "react";
import { Title, Subtitle } from "./Title";
import cx from "classnames";

export const SectionHeader = ({ title, subtitle, className, ...props }) => {
  const classes = cx("section-header", className);
  return (<header className={classes}>
    {title && (<Title size="4" priority="3">
      {title}
    </Title>)}
    {subtitle && (<Subtitle size="4" priority="4">
      {subtitle}
    </Subtitle>)}
  </header>);
};



