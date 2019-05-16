import _ from "lodash";
import React from "react";
import { FormGroup, FormText, Label, Input } from "reactstrap";

export const GuestFields = ({ index, ...props }) => {
  const guest = props.values.guests[index];
  const errors = _.get(props, `errors.guests[${index}]`, {});

  return (
    <>
      <FormGroup>
        <Label>Name</Label>
        <Input
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={guest.name}
          name={`guests[${index}].name`}
        />
        {errors.name && <FormText color="danger">{errors.name}</FormText>}
      </FormGroup>

      <FormGroup>
        <Label>Will you be attending?</Label>
        <Input
          type="select"
          name={`guests[${index}].attending`}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={guest.attending}
        >
          <option value="">Select...</option>
          <option>Will Attend</option>
          <option>Will not Attend</option>
        </Input>
        {errors.attending && (
          <FormText color="danger">{errors.attending}</FormText>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Meal Selection</Label>
        <Input
          type="select"
          name={`guests[${index}].mealOption`}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={guest.mealOption}
        >
          <option value="">Select a Meal...</option>
          <option>Rigatoni Bolognese</option>
          <option>Pesto Chicken</option>
          <option>Butternut Squash Ravioli (vegetarian)</option>
        </Input>
        {errors.mealOption && (
          <FormText color="danger">{errors.mealOption}</FormText>
        )}
        <FormText color="muted">Details can be found on your paper invitation.</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name={`guests[${index}].email`}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={guest.email}
        />
        {errors.email && <FormText color="danger">{errors.email}</FormText>}
      </FormGroup>
      <FormGroup>
        <Label>Phone</Label>
        <Input
          type="tel"
          name={`guests[${index}].phone`}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={guest.phone}
        />
        {errors.phone && <FormText color="danger">{errors.phone}</FormText>}
      </FormGroup>
    </>
  );
};
