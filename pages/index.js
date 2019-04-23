import { Container, Content, Hero, HeroBody, Subtitle, Title } from "bloomer";
import React from "react";
import StackGrid, { easings, transitions } from "react-stack-grid";
import { Layout } from "../components/Layout";
import { StackImage } from "../components/StackImage";
import { TimelineEntry } from "../components/TimelineEntry";
import timeline from "../data/timeline.yaml";
import { HeroHeader } from "../components/HeroHeader";

const transition = transitions.scaleDown;

export default () => {
  const timelineEntries = timeline.map((t, i) => (
    <TimelineEntry key={i} left={i % 2 === 0} src={`static/img/${t.image}`}>
      {t.text}
    </TimelineEntry>
  ));

  return (
    <Layout>
      <Container>
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
              <Subtitle>are getting married</Subtitle>
            </HeroHeader>
          </HeroBody>
        </Hero>

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

        <div className="container is-narrow">{timelineEntries}</div>

        <hr />

        <Content hasTextAlign="centered">
          <Title>Our Favorite Memories</Title>

          <small>
            Want to have these photos? Click here to download the whole set.
          </small>
        </Content>

        <StackGrid
          monitorImagesLoaded
          columnWidth={"20%"}
          duration={600}
          gutterWidth={10}
          gutterHeight={10}
          easing={easings.cubicOut}
          appearDelay={60}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
        >
          <StackImage src="https://picsum.photos/200/300/?random" />
          <StackImage src="https://picsum.photos/400/600/?random" />
          <StackImage src="https://picsum.photos/200/400/?random" />
          <StackImage src="https://picsum.photos/200/200/?random" />

          <StackImage src="https://picsum.photos/200/300/?random" />
          <StackImage src="https://picsum.photos/400/600/?random" />
          <StackImage src="https://picsum.photos/200/400/?random" />
          <StackImage src="https://picsum.photos/200/200/?random" />

          <StackImage src="https://picsum.photos/800/300/?random" />
          <StackImage src="https://picsum.photos/600/600/?random" />
          <StackImage src="https://picsum.photos/300/400/?random" />
          <StackImage src="https://picsum.photos/250/200/?random" />

          <StackImage src="https://picsum.photos/200/300/?random" />
          <StackImage src="https://picsum.photos/430/600/?random" />
          <StackImage src="https://picsum.photos/220/400/?random" />
          <StackImage src="https://picsum.photos/210/200/?random" />
        </StackGrid>
      </Container>
    </Layout>
  );
};
