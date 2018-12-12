import React from "react";
import Head from "next/head";

import "../assets/styles/main.scss";

export const Layout = ({ children, ...props }) => (
  <main id="main" {...props}>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}
  </main>
);
