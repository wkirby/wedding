import React from "react";
import { Container, Alert, Button } from "reactstrap";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";
import { LookupForm } from "../components/LookupForm";
import { PageHeader } from "../components/PageHeader";
import { RsvpForm } from "../components/RsvpForm";
import { Section } from "../components/Section";

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
              <Alert color="success">Thank you for your RSVP.</Alert>
            ) : (
              <>
                {guestName ? (
                  <>
                    <div className="mb-3">
                      <Button outline color="secondary" size="sm" onClick={this.reset}>
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
