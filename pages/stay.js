import {
  Column,
  Columns,
  Content,
  Menu,
  MenuLabel,
  MenuLink,
  MenuList,
  Title
} from "bloomer";
import React from "react";
import { Layout } from "../components/Layout";

import rentalData from "../data/rentals.yaml";
import hotelData from "../data/hotels.yaml";
import travelData from "../data/travel.yaml";
import { LocationBlock } from "../components/LocationBlock";
import { PageHero } from "../components/PageHero";

const StaySidebarMenu = props => (
  <Menu>
    <MenuLabel>Getting to Maine</MenuLabel>
    <MenuList>
      {travelData.map((t, i) => {
        return (
          <li key={i}>
            <MenuLink href={`#travel-${i}`}>{t.label}</MenuLink>
          </li>
        );
      })}
    </MenuList>
    <MenuLabel>Vacation Rentals</MenuLabel>
    <MenuList>
      <li>
        <MenuLink href={`#airbnb`}>Airbnb</MenuLink>
      </li>
      <li>
        <MenuLink href={`#vrbo`}>VRBO</MenuLink>
      </li>
    </MenuList>
    <MenuLabel>Hotels</MenuLabel>
    <MenuList>
      {hotelData.map((t, i) => {
        return (
          <li key={i}>
            <MenuLink href={`#hotel-${i}`}>{t.label}</MenuLink>
          </li>
        );
      })}
    </MenuList>
  </Menu>
);

export default () => {
  return (
    <Layout>
      <PageHero background={"url(static/img/hero/stay_hero.jpg)"}>
        <Title>Where to Stay</Title>
      </PageHero>
      <Columns isCentered>
        <Column isSize="1/3">
          <StaySidebarMenu />
        </Column>
        <Column>
          <Content>
            <p>
              Maine’s midcoast region is a beautiful destination for a summer
              vacation. Because we have two venues, there are a wide range of
              places you could stay for your visit — depending on your
              preferences. Generally speaking, anywhere between Portland, ME and
              Brunswick, ME along I-295 will suit you just fine, and we
              encourage you to explore the region while you’re here.
            </p>
          </Content>
          <Title isSize={4}>Getting to Maine</Title>
          <Content>
            <p>
              Maine is a small state, and there are a number of ways to get
              here. The main airport is PWM, located in Portland, ME --- but it
              can be a pricey destination, especially in summer.
            </p>
            <p>
              The next best airport is Boston Logan, in Boston, MA. From there,
              you can rent a car and take I-95 north to Portland. The drive is
              pleasant, and takes just about 2 hours.
            </p>
            <p>
              If renting a car is not your thing, Concord Coach Lines runs
              multiple buses every day from Boston Logan to the Portland
              Transportation Center.
            </p>
          </Content>

          {travelData.map((t, i) => (
            <LocationBlock {...t} key={i} />
          ))}

          <Title isSize={4}>Vacation Rentals</Title>
          <Content>
            <p>
              Our preferred accomodations when visiting Maine, you can find many
              beautiful homes to stay in on a number of vacation rental sites.
              Below are our recommendations for sites where you might find
              pleasant accomodations.
            </p>
          </Content>
          {rentalData.map((t, i) => (
            <LocationBlock {...t} key={i} />
          ))}

          <Title isSize={4}>Hotels &amp; Inns</Title>
          {hotelData.map((t, i) => (
            <LocationBlock {...t} key={i} />
          ))}
        </Column>
      </Columns>
    </Layout>
  );
};
