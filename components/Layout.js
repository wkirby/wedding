import Head from "next/head";
import React from "react";
import siteData from "../data/site.yaml";
import "../assets/styles/main.scss";
import { Footer } from "../components/Footer";
import { Nav } from "./Nav";
import { Icon } from "./Icon";

const Favicon = ({ href }) => (
  <>
    <link rel="shortcut icon" href={href} type="image/x-icon" />
    <link rel="icon" href={href} type="image/x-icon" />
  </>
);

export const Layout = ({ heroImage, pageTitle, children, ...props }) => {
  const image = heroImage ? heroImage : siteData.og_image;
  const title = pageTitle
    ? `${pageTitle} | ${siteData.page_title}`
    : siteData.page_title;

  return (
    <main id="main" {...props}>
      <Head>
        <Favicon href="/static/img/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
          integrity="sha256-hmDtEnmZFvJ3zLsfobp03CSD3/qRCJmY3f7Vqf6zIgA="
          crossOrigin="anonymous"
        />


        <title>{title}</title>
        <meta name="description" content={siteData.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={`${siteData.root_url}${image}`} />
        <meta property="og:url" content={siteData.root_url} />
        <meta property="og:description" content={siteData.description} />
      </Head>

      <Nav />
      {children}

      <Footer className="text-center text-muted">
        <small>
          Made with <Icon className="typcn typcn-heart" /> in Seattle by{" "}
          <a href="https://www.apsis.io/" target="_blank">
            Apsis Labs
          </a>
        </small>
      </Footer>
    </main>
  );
};
