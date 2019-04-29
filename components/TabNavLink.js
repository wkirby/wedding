import classnames from "classnames";
import React from "react";
import { NavItem, NavLink } from "reactstrap";
export const TabNavLink = ({
  activeTab,
  tabId,
  onClick,
  children,
  ...props
}) => {
  const active = activeTab == tabId;
  return (
    <NavItem {...props}>
      <NavLink
        href={`#${tabId}`}
        className={classnames({ active: active })}
        onClick={() => onClick(tabId)}
      >
        {children}
      </NavLink>
    </NavItem>
  );
};
