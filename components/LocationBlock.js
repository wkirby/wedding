import { Box, Content, Icon } from "bloomer";
import React from "react";
export const LocationBlock = ({ children, ...props }) => {
  return (
    <Box>
      <Content>
        {props.label && <strong>{props.label}</strong>}

        {props.details && (
          <p>
            <em>{props.details}</em>
          </p>
        )}

        {props.address && <address>{props.address}</address>}
        {props.phone && (
          <p>
            <a href={`tel:${props.phone}`}>
              <Icon className="typcn typcn-phone" /> {props.phone}
            </a>
          </p>
        )}
        {props.website && (
          <p>
            <a href={props.website} target="_blank">
              <Icon className="typcn typcn-compass" /> Website
            </a>
          </p>
        )}
      </Content>
    </Box>
  );
};
