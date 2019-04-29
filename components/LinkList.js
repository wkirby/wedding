import React from "react";
import { Icon } from "./Icon";
export const LinkList = ({ links, ...props }) => {
  return (
    <ul className="list-inline" {...props}>
      {links.map((l, i) => {
        return (
          <li className="list-inline-item" key={i}>
            {l.icon && <Icon className={`typcn typcn-${l.icon} mr-1`} />}
            <a href={l.href} target="_blank">
              {l.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
