import React from "react";
import Head from "next/head";
import { Section, Container, Content, Footer, Columns } from "bloomer";

import "../assets/styles/main.scss";
import { Nav } from "./Nav";

export const Layout = ({ children, ...props }) => (
  <main id="main" {...props}>
    <Head>
      <link
        rel="shortcut icon"
        href="/static/img/favicon.ico"
        type="image/x-icon"
      />
      <link rel="icon" href="/static/img/favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
        integrity="sha256-hmDtEnmZFvJ3zLsfobp03CSD3/qRCJmY3f7Vqf6zIgA="
        crossorigin="anonymous"
      />
      <title>Wyatt &amp; Jessica</title>
    </Head>

    <Section>
      <Container>
        <Nav />
        {children}
      </Container>
    </Section>

    <Footer id="footer">
      <Container>
        <Content isSize="small">Hello :)</Content>
      </Container>
    </Footer>
  </main>
);
