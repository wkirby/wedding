import React from "react";
import { Container, Alert, Button } from "reactstrap";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";
import { LookupForm } from "../components/LookupForm";
import { PageHeader } from "../components/PageHeader";
import { RsvpForm } from "../components/RsvpForm";
import { Section } from "../components/Section";
import cx from "classnames";

const InfoBox = ({ className, color, icon, children, ...props }) => {
  const classNames = cx("info", `info-${color}`, className);
  return (
    <div className={classNames} {...props}>
      {icon && <Icon className={`info-icon ${icon}`} />}
      <div className="info-body">{children}</div>
    </div>
  );
};

class RsvpPage extends React.Component {
  state = { guests: {}, submitted: false };

  reset = () => {
    this.setState({ guests: {}, submitted: false });
  };

  afterLookup = data => {
    this.setState({ guests: data });
  };

  afterRespond = data => {
    this.setState({ submitted: true });
  };

  render() {
    const {
      submitted,
      guests: { guestName, partnerName, plusOne }
    } = this.state;

    return (
      <Layout pageTitle="RSVP">
        <PageHeader title="RSVP" />
        <Section>
          <Container className="is-narrow">
            {submitted ? (
              <InfoBox icon="typcn typcn-heart" color="success">
                <span className="text-success">
                  <strong>Thank you for your RSVP</strong>
                </span>
                <p>
                  If at any time you would like to update your RSVP, simply
                  re-submit the form. RSVPs will close on June 30<sup>th</sup>{" "}
                  2019.
                </p>
              </InfoBox>
            ) : (
              <>
                {guestName ? (
                  <>
                    <div className="mb-3">
                      <Button
                        outline
                        color="secondary"
                        size="sm"
                        onClick={this.reset}
                      >
                        <Icon className="typcn typcn-chevron-left" />
                        Back
                      </Button>
                    </div>

                    <RsvpForm
                      afterSubmit={this.afterRespond}
                      guestName={guestName}
                      partnerName={partnerName}
                      plusOne={plusOne}
                    />
                  </>
                ) : (
                  <LookupForm afterSubmit={this.afterLookup} />
                )}

                <hr />
                <InfoBox icon="typcn typcn-info-large" color="info">
                  <strong>Trouble with your RSVP?</strong>

                  <p>
                    <a href="mailto:weddings@apsis.io">Contact us</a> and we
                    will help you sort it out.
                  </p>
                </InfoBox>
              </>
            )}
            
          </Container>
        </Section>
      </Layout>
    );
  }
}

export default RsvpPage;
