import React from "react";
import { Section } from "../components/Section";
import { Container } from "reactstrap";
import { Layout } from "../components/Layout";
import { ZolaEmbed } from "../components/ZolaEmbed";
import { PageHeader } from "../components/PageHeader";

export default () => {
  return (
    <Layout>
      <PageHeader title="Registry" />
      <Container className="is-narrow">
        <p className="lead">
          We know our registry might look a little strange &mdash; we've been
          together now for almost a decade and have already furnished our home
          with most of the "traditional" wedding gifts.
        </p>
        <p>
          Below you'll find a registry of some items that we'd be thrilled to
          receive. Because our wedding is in Maine, we encourage you to send any
          gifts to our home in Seattle:
        </p>
        <address>
          PO Box #85866
          <br />
          Seattle, WA 98145
        </address>
      </Container>
      <hr/>
      <Section>
        <Container>
          <ZolaEmbed slug="operationmidnightviper" />
        </Container>
      </Section>
    </Layout>
  );
};
