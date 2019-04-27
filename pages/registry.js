import { Section } from "bloomer";
import React from "react";
import { Layout } from "../components/Layout";
import { ZolaEmbed } from "../components/ZolaEmbed";

export default () => {
  return (
    <Layout>
      <Section>
        <ZolaEmbed slug="operationmidnightviper" />
      </Section>
    </Layout>
  );
};
