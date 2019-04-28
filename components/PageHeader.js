import React from "react";
import { Title } from "./Title";
import cx from "classnames";
export const PageHeader = ({ title, className, ...props }) => {
  const classes = cx("page-header", "text-center", className);
  return (<header className={classes}>
    {title && (<Title size="3" priority="1">
      {title}
    </Title>)}
    <hr/>
  </header>);
};
