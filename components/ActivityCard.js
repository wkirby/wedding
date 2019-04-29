import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { LinkList } from "./LinkList";
import { FavoriteTag } from "./FavoriteTag";

export const ActivityCard = ({
  label,
  website,
  description,
  address,
  map,
  id,
  favorite,
  phone,
  ...props
}) => {
  const links = [];

  if (map) {
    links.push({
      label: "View on Map",
      icon: "map",
      href: map
    });
  }

  if (website) {
    links.push({
      label: "View Website",
      icon: "compass",
      href: website
    });
  }

  if (phone) {
    links.push({
      label: phone,
      icon: "phone",
      href: `tel:${phone}`
    });
  }

  return (
    <Card className="mb-3" {...props}>
      <CardBody>
        {favorite && <FavoriteTag id={`${id}`} />}

        <CardTitle>
          <strong>{label}</strong>
        </CardTitle>

        {address && <address>{address}</address>}
        {description && <p className="text-muted">{description}</p>}

        {links.length > 0 ? <LinkList links={links} /> : null}
      </CardBody>
    </Card>
  );
};
