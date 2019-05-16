import { Formik, Field } from "formik";
import axios from "axios";
import * as yup from "yup";
import React from "react";
import { Alert, Button, Form, Card, CardBody, CardTitle } from "reactstrap";
import { GuestFields } from "./GuestFields";

const RSVP_URL = "http://localhost:3214/rsvp";

const GUEST_SCHEMA = yup.object().shape({
  name: yup.string().required("Please provide a name."),
  attending: yup
    .string()
    .required("Please indicate whether you will be attending."),
  mealOption: yup.string().when("attending", {
    is: "Will Attend",
    then: yup.string().required("Please indicate a meal selection."),
    otherwise: yup.string()
  }),
  email: yup.string().email("Please provide a valid email."),
  phone: yup.string()
});

const GUESTS_SCHEMA = yup.object().shape({
  invitedGuest: yup.string().required(),
  guests: yup.array().of(GUEST_SCHEMA)
});

export class RsvpForm extends React.Component {
  state = { error: null };

  formatGuest = name => {
    return {
      name: name,
      attending: "",
      mealOption: "",
      email: "",
      phone: ""
    };
  };

  onSubmit = async (values, actions) => {
    const { afterSubmit } = this.props;
    this.setState({ error: null });

    try {
      const res = await axios.post(RSVP_URL, values);
      if (afterSubmit) {
        afterSubmit(res.data);
      }
    } catch (e) {
      if (e.response && e.response.status === 404) {
        this.setState({
          error: "Sorry, we couldn't find any guests by that name."
        });
      } else {
        console.log(e);
        this.setState({
          error: "Sorry, something went wrong. Please try again later!"
        });
      }
    } finally {
      actions.setSubmitting(false);
    }
  };

  render() {
    const { guestName, partnerName, plusOne = false, ...props } = this.props;
    const { error } = this.state;
    let guests = [];
    if (guestName) {
      guests.push(this.formatGuest(guestName));
    }
    if (partnerName) {
      guests.push(this.formatGuest(partnerName));
    }
    if (plusOne) {
      guests.push(this.formatGuest("Plus One"));
    }
    if (guests.length < 1) {
      return null;
    }
    return (
      <>
        {error && <Alert color="warning">{error}</Alert>}
        <Formik
          initialValues={{ invitedGuest: guestName, guests }}
          validationSchema={GUESTS_SCHEMA}
          onSubmit={this.onSubmit}
          render={props => (
            <Form onSubmit={props.handleSubmit}>
              <Field
                type="hidden"
                name="invitedGuest"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />

              {props.values.guests &&
                props.values.guests.length > 0 &&
                props.values.guests.map((guest, index) => (
                  <Card key={index} className="mb-3">
                    <CardBody>
                      {props.values.guests.length > 1 && (
                        <CardTitle><h5>Guest {index + 1}</h5></CardTitle>
                      )}
                      <GuestFields guest={guest} index={index} {...props} />
                    </CardBody>
                  </Card>
                ))}

              <Button color="primary" type="submit">
                {props.isSubmitting ? "Sending..." : "RSVP"}
              </Button>
            </Form>
          )}
        />
      </>
    );
  }
}
