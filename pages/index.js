import { Hero, HeroBody } from "bloomer";
import React from "react";
import { transitions } from "react-stack-grid";
import { HeroHeader } from "../components/HeroHeader";
import { Layout } from "../components/Layout";
import { PhotoWall } from "../components/PhotoWall";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineEntry } from "../components/TimelineEntry";
import { Subtitle, Title } from "../components/Title";

import timeline from "../data/timeline.yaml";
import photoData from "../data/photos.yaml";

export const transition = transitions.scaleDown;

export default () => {
  const timelineEntries = timeline.map((t, i) => (
    <TimelineEntry key={i} left={i % 2 === 0} src={`static/img/${t.image}`}>
      {t.text}
    </TimelineEntry>
  ));

  return (
    <Layout pageTitle="We're Getting Married">
      <Hero
        isColor="dark"
        isSize="large"
        className="has-bg-img has-border has-vignette is-home is-bottom"
        style={{ backgroundImage: `url(/static/img/hero.jpg)` }}
      >
        <HeroBody>
          <HeroHeader>
            <Title>
              Wyatt <small>&amp;</small> Jessica
            </Title>
            <Subtitle>August 3, 2019</Subtitle>
          </HeroHeader>
        </HeroBody>
      </Hero>

      <hr/>
      <Section>
        <div className="container is-narrow text-center">
          <SectionHeader title="Ten Years Together" />

          <p className="lead">
            We get asked all the time: "what took so long?" The short answer: We
            were busy. This summer we’re excited to celebrate our first decade
            together with a wedding, but we’re just as excited to look back at
            all the amazing things that have happened in the last 10 years.
            Since we first met at Bennington in 2009, we:
          </p>
        </div>
      </Section>

      <Section>
        <div className="container is-narrow text-center">
          {timelineEntries}

          <p className="mt-5 lead">&hellip; and we can't wait to find out what happens next.</p>
        </div>
      </Section>

      <hr />

      <Section>
        <div className="container is-narrow text-center mb-5">
          <SectionHeader title="Our Favorite Memories" />
          <p className="lead">
            Want to have these photos?{" "}
            <a href="/static/img/wj_photo_gallery.zip" download>
              Click here to download
            </a>{" "}
            the whole set.
          </p>
        </div>

        <PhotoWall photos={photoData} />
      </Section>
    </Layout>
  );
};
