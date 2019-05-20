import React from "react";
import { Button, Spinner } from "reactstrap";

export const SubmitButton = ({ label, submittingLabel, submitting, ...props }) => (
  <Button disabled={submitting} color="primary" {...props}>
    {submitting ? (
      <>
        <div className="d-flex align-items-center">
          <Spinner size="sm mr-2" /> {submittingLabel}
        </div>
      </>
    ) : (
      label
    )}
  </Button>
);
