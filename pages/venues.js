import React from "react";
import { Layout } from "../components/Layout";
import { Title, Columns, Column, Subtitle, Content } from "bloomer";
import { Hero } from "bloomer/lib/layout/Hero/Hero";
import { HeroBody } from "bloomer/lib/layout/Hero/HeroBody";
import { Container } from "bloomer";
const MAP_URL =
  "https://www.google.com/maps/place/Frontier/@43.919757,-69.9691237,17z/data=!3m1!4b1!4m5!3m4!1s0x4cad87705c7a502d:0x46d203cdf7b1ad6a!8m2!3d43.919757!4d-69.966935";

export default () => {
  return (
    <Layout>
      <Hero
        isColor="info"
        isSize="large"
        className="has-bg-img"
        style={{ backgroundImage: `url(static/img/frontier.jpg)` }}
      >
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title isSize="1">The Venues</Title>
          </Container>
        </HeroBody>
      </Hero>

      <Content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugit
          eum perferendis iure debitis officiis excepturi quam minus fuga
          facere, maiores explicabo. Veniam ab hic excepturi delectus,
          asperiores voluptates laborum?
        </p>
      </Content>

      <Columns isCentered>
        <Column>
          <Title>Gilsland Farm</Title>
          <Subtitle>The Ceremony</Subtitle>
          <p>
            Situated along the Presumpscot River estuary just five minutes from
            Portland, Maine Audubon’s headquarters features a modern
            environmental education center and a 65-acre sanctuary with more
            than two miles of trails winding along a pond and through forest,
            meadow, orchard, and salt marsh.
          </p>
          <address>
            20 Gilsland Farm Road<br/>
            Falmouth, Maine 04105
          </address>
        </Column>
        <Column>
          <Title>The Frontier</Title>
          <Subtitle>The Reception</Subtitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, minima rerum corporis doloribus fugiat explicabo
            perspiciatis eius, totam, ducimus sed quos fuga! Excepturi expedita
            in, rerum eius placeat repudiandae repellat.
          </p>
          <address>
            14 Maine St.<br/>
            Mill 3 Fort Andross<br/>
            Brunswick, ME 04011
          </address>
        </Column>
      </Columns>
    </Layout>
  );
};
