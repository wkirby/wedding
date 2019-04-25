import { Column, Columns, Content, Subtitle, Title } from "bloomer";
import React from "react";
import { Layout } from "../components/Layout";
import { PageHero } from "../components/PageHero";

export default () => {
  return (
    <Layout>
      <PageHero background="url(static/img/frontier.jpg)">
        <Title isSize="1">The Venues</Title>
      </PageHero>

      <Columns isCentered>
        <Column>
          <Title>Gilsland Farm</Title>
          <Subtitle isSize="5">Ceremony</Subtitle>
          <Content>
            <p>
              Just 10 minutes away from Portland, ME, Gilsland Farm is a
              beautiful nature preserve run by the Maine Audubon Society.
              Situated alongside the Presumpscot River estuary, our wedding will
              be held in the center’s Apple Orchard, surrounded by trees and —
              of course — birds. Before and after the ceremony, we invite our
              guests to explore the beautiful Maine landscape, with over two
              miles of easy trails that will take you through meadows, by a
              pond, and along the river.
            </p>
            <p>Light refreshments to be served.</p>
            <address>
              20 Gilsland Farm Road
              <br />
              Falmouth, Maine 04105
            </address>
          </Content>
        </Column>
        <Column>
          <Title>The Frontier</Title>
          <Subtitle isSize="5">Reception</Subtitle>
          <Content>
            <p>
              After the ceremony, we invite you to join us just 30 minutes north
              at The Frontier, in Brunswick, ME. Home to Bowdoin College,
              Brunswick is a quintessential representative of the towns of
              Midcoast Maine — and is just a quick drive from Jessica’s
              childhood home.
            </p>

            <p>
              The Frontier is usually a full service restaurant and bar with an
              attached Theater and Cafe, and we’re excited to share their
              delicious food with you for an evening of dinner, dancing, coffee
              and donuts.
            </p>
            <address>
              14 Maine St.
              <br />
              Mill 3 Fort Andross
              <br />
              Brunswick, ME 04011
            </address>
          </Content>
        </Column>
      </Columns>

      <hr />

      <div className="has-text-centered container is-narrow">
        <Title>The Day Of</Title>
        <Content>
          <p>
            If you can’t join us for the whole day, we understand; here's where
            we (hope) to be at any given time:
          </p>

          <ul className="is-unstyled">
            <li>
              <strong>1pm</strong>: Guests arrive at Gilsland Farm
            </li>
            <li>
              <strong>2pm</strong>: Ceremony Starts
            </li>
            <li>
              <strong>2:30pm</strong>: Refreshments Served
            </li>
            <li>
              <strong>2:45pm</strong>: Wedding Party Photographs at Gilsland
              Farm
            </li>
            <li>
              <strong>4pm</strong>: Guests arrive at The Frontier
            </li>
            <li>
              <strong>5pm</strong>: Dinner Served
            </li>
            <li>
              <strong>6:15pm</strong>: Toasts &amp; Speeches
            </li>
            <li>
              <strong>6:30pm</strong>: Dance etc.
            </li>
            <li>
              <strong>10:00pm</strong>: Reception Ends
            </li>
          </ul>
        </Content>
      </div>
    </Layout>
  );
};
