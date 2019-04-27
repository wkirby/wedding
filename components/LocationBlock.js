import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Icon } from "./Icon";

export const LocationBlock = ({ children, ...props }) => {
  const { label, details, address, phone, website } = props;
  return (
    <Card className="mb-3" {...props}>
      <CardBody>
        {label && <CardTitle><strong>{label}</strong></CardTitle>}

        {details && (
          <p>
            <em>{details}</em>
          </p>
        )}

        {address && <address>{address}</address>}

        {phone && (
          <a href={`tel:${phone}`}>
            <Icon className="typcn typcn-phone" /> {phone}
          </a>
        )}
        {website && (
          <a href={website} target="_blank">
            <Icon className="typcn typcn-compass" /> Website
          </a>
        )}
      </CardBody>
    </Card>
  );
};
