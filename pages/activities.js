import React from "react";
import { Container } from "reactstrap";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

export default () => {
  return (
    <Layout>
      <Section className="text-center">
        <Title size="1">What to Do</Title>
      </Section>
      <hr />
      <Container />
    </Layout>
  );
};
