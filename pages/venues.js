import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Image } from "../components/Image";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import { PageHeader } from "../components/PageHeader";
import { Timeline } from "../components/Timeline";
import scheduleData from "../data/schedule.yaml";

export default () => {
  return (
    <Layout pageTitle="The Venues">
      <PageHeader title="The Venues" />

      <Section>
        <Container>
          <Row className="v-center">
            <Col md={{ size: 6, order: "last" }}>
              <Image
                ratio="4by3"
                src="/static/img/audubon.jpg"
                className="has-border"
              />
            </Col>

            <Col md={6}>
              <SectionHeader title="Gilsland Farm" subtitle="Ceremony" />

              <div>
                <p>
                  Just 10 minutes away from Portland, ME, Gilsland Farm is a
                  beautiful nature preserve run by the Maine Audubon Society.
                  Situated alongside the Presumpscot River estuary, our wedding
                  will be held in the center’s Apple Orchard, surrounded by
                  trees and — of course — birds. Before and after the ceremony,
                  we invite our guests to explore the beautiful Maine landscape,
                  with over two miles of easy trails that will take you through
                  meadows, by a pond, and along the river.
                </p>

                <p>Light refreshments to be served.</p>

                <address>
                  20 Gilsland Farm Road
                  <br />
                  Falmouth, Maine 04105
                </address>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <hr />

      <Section>
        <Container>
          <Row className="v-center">
            <Col md={6}>
              <Image
                ratio="4by3"
                src="/static/img/frontier.jpg"
                className="has-border"
              />
            </Col>

            <Col md={6}>
              <SectionHeader title="The Frontier" subtitle="Reception" />
              <div>
                <p>
                  After the ceremony, we invite you to join us just 30 minutes
                  north at The Frontier, in Brunswick, ME. Home to Bowdoin
                  College, Brunswick is a quintessential representative of the
                  towns of Midcoast Maine — and is just a quick drive from
                  Jessica’s childhood home.
                </p>

                <p>
                  The Frontier is usually a full service restaurant and bar with
                  an attached Theater and Cafe, and we’re excited to share their
                  delicious food with you for an evening of dinner, dancing,
                  coffee and donuts.
                </p>
                <address>
                  14 Maine St.
                  <br />
                  Mill 3 Fort Andross
                  <br />
                  Brunswick, ME 04011
                </address>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <hr />

      <Section>
        <Container className="is-narrow text-md-center">
          <SectionHeader title="The Day Of" />

          <div className="mb-5">
            <p className="lead">
              If you can’t join us for the whole day, we understand; here's
              where we (hope) to be at any given time:
            </p>
          </div>

          <Timeline entries={scheduleData} />
        </Container>
      </Section>

      <div className="image-footer mt-3">
        <img src="/static/img/hero/maine.png" className="img-fluid" />
      </div>
    </Layout>
  );
};
