import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";

import "../assets/styles/main.scss";
import { Nav } from "./Nav";

export const Layout = ({ pageTitle, children, ...props }) => {
  const title = pageTitle ? `${pageTitle} | Wyatt & Jessica` : 'Wyatt & Jessica'
  return (
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
          crossOrigin="anonymous"
        />

        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content="/static/img/hero.jpg" />
        <meta name="description" content="Wyatt and Jessica are getting married. August 3, 2019."/>
      </Head>

      <Nav />
      {children}

      <Footer className="text-center text-muted">
        <small>
          Made with ❤ in Seattle by{" "}
          <a href="https://www.apsis.io/" target="_blank">
            Apsis Labs
          </a>
        </small>
      </Footer>
    </main>
  );
};
