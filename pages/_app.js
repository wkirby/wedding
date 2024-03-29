import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import smartquotes from "smartquotes";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    smartquotes().listen();
  }

  render() {
    const { Component, pageProps, router } = this.props

    return (
      <Container>
        <PageTransition timeout={150} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </Container>
    )
  }
}
