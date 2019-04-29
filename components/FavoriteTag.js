import React from "react";
import { UncontrolledTooltip } from "reactstrap";
import { Icon } from "./Icon";
export const FavoriteTag = ({ id, ...props }) => {
  return (
    <div className="favorite" id={`favorite-${id}`}>
      <Icon className="typcn typcn-star" />
      <UncontrolledTooltip placement="top" target={`favorite-${id}`}>
        Our Favorite!
      </UncontrolledTooltip>
    </div>
  );
};
