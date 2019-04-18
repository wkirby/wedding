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
      <title>Wyatt &amp; Jessica</title>
    </Head>

    <Section>
      <Container>
        <Nav />
        <Content>{children}</Content>
      </Container>
    </Section>

    <Footer id="footer">
      <Container>
        <Content isSize="small">Hello :)</Content>
      </Container>
    </Footer>
  </main>
);
