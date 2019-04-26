import {
  Container,
  Content,
  Hero,
  HeroBody,
  Subtitle,
  Title,
  Section
} from "bloomer";
import React from "react";
import { transitions } from "react-stack-grid";
import { Layout } from "../components/Layout";
import { TimelineEntry } from "../components/TimelineEntry";
import timeline from "../data/timeline.yaml";
import { HeroHeader } from "../components/HeroHeader";
import { PhotoWall } from "../components/PhotoWall";

export const transition = transitions.scaleDown;

export default () => {
  const timelineEntries = timeline.map((t, i) => (
    <TimelineEntry key={i} left={i % 2 === 0} src={`static/img/${t.image}`}>
      {t.text}
    </TimelineEntry>
  ));

  return (
    <Layout>
      <Section>
        <Hero
          isColor="dark"
          isSize="large"
          className="has-bg-img has-border has-vignette is-home is-bottom"
          style={{ backgroundImage: `url(static/img/hero.jpg)` }}
        >
          <HeroBody>
            <HeroHeader>
              <Title>
                Wyatt <small>&amp;</small> Jessica
              </Title>
              <Subtitle>august 3, 2019</Subtitle>
            </HeroHeader>
          </HeroBody>
        </Hero>
      </Section>

      <Section>
        <Content hasTextAlign="centered">
          <div className="container is-narrow">
            <Title>10 Years Together</Title>
            <p>
              We get asked all the time: "what took so long?" The short answer:
              We were busy. This summer we’re excited to celebrate our first
              decade together with a wedding, but we’re just as excited to look
              back at all the amazing things that have happened in the last 10
              years. Since we first met at Bennington in 2009, we have:
            </p>
          </div>
        </Content>
      </Section>
      <Section>
        <div className="container is-narrow">{timelineEntries}</div>
      </Section>

      <hr />
      <Section>
        <Content hasTextAlign="centered">
          <Title>Our Favorite Memories</Title>

          <small>
            Want to have these photos? Click here to download the whole set.
          </small>
        </Content>

        <PhotoWall />
      </Section>
    </Layout>
  );
};
