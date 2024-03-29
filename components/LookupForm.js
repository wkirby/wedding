import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { Alert, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import * as yup from "yup";
import { SubmitButton } from "./SubmitButton";

const LOOKUP_SCHEMA = yup.object().shape({
  name: yup.string().required("Please provide a name.")
});

const LOOKUP_URL = process.env.LOOKUP_URL;

export class LookupForm extends React.Component {
  state = { error: null };
  onSubmit = async (values, actions) => {
    const { afterSubmit } = this.props;
    this.setState({ error: null });
    try {
      const res = await axios.post(LOOKUP_URL, values);
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
    const { afterSubmit, ...props } = this.props;
    const { error } = this.state;
    return (
      <>
        {error && <Alert color="warning">{error}</Alert>}
        <Formik
          validateOnBlur={false}
          falidateOnChange={false}
          initialValues={{ name: "" }}
          validationSchema={LOOKUP_SCHEMA}
          onSubmit={this.onSubmit}
          render={props => (
            <Form onSubmit={props.handleSubmit}>
              <FormGroup>
                <Label>Your Full Name</Label>
                <Input
                  placeholder="John Doe"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                  autoFocus
                />

                {props.errors.name && (
                  <FormText color="danger">{props.errors.name}</FormText>
                )}

                <FormText color="muted">
                  Please enter your full name as it appears on your paper
                  invitation.
                </FormText>
              </FormGroup>

              <SubmitButton
                block={!props.isSubmitting}
                submitting={props.isSubmitting}
                label="Look Up"
                submittingLabel="Searching..."
                type="submit"
              />
            </Form>
          )}
        />
      </>
    );
  }
}
