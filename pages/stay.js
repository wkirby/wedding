import { Title } from "bloomer";
import React from "react";
import { Nav, NavItem, NavLink, Row, Col, Container } from "reactstrap";
import { Layout } from "../components/Layout";
import { LocationBlock } from "../components/LocationBlock";
import hotelData from "../data/hotels.yaml";
import rentalData from "../data/rentals.yaml";
import travelData from "../data/travel.yaml";

const StaySidebarMenu = props => (
  <aside>
    <Nav vertical>
      <NavItem>Getting to Maine</NavItem>
      {travelData.map((t, i) => {
        return (
          <NavItem key={i}>
            <NavLink href={`#travel-${i}`}>{t.label}</NavLink>
          </NavItem>
        );
      })}

      <NavItem>Vacation Rentals</NavItem>
      <NavItem>
        <NavLink href={`#airbnb`}>Airbnb</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={`#vrbo`}>VRBO</NavLink>
      </NavItem>

      <NavItem>Hotels</NavItem>
      {hotelData.map((t, i) => {
        return (
          <NavItem key={i}>
            <NavLink href={`#hotel-${i}`}>{t.label}</NavLink>
          </NavItem>
        );
      })}
    </Nav>
  </aside>
);

export default () => {
  return (
    <Layout>
      {/* <PageHero background={"url(static/img/hero/stay_hero.jpg)"}>
        <Title>Where to Stay</Title>
      </PageHero> */}
      <Container>
        <Row>
          <Col sm={4}>
            <StaySidebarMenu />
          </Col>

          <Col>
            <p>
              Maine’s midcoast region is a beautiful destination for a summer
              vacation. Because we have two venues, there are a wide range of
              places you could stay for your visit — depending on your
              preferences. Generally speaking, anywhere between Portland, ME and
              Brunswick, ME along I-295 will suit you just fine, and we
              encourage you to explore the region while you’re here.
            </p>

            <hr />

            <h3>Getting to Maine</h3>
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

            {travelData.map((t, i) => (
              <LocationBlock {...t} key={i} />
            ))}

            <hr />

            <h3>Vacation Rentals</h3>
            <p>
              Our preferred accomodations when visiting Maine, you can find many
              beautiful homes to stay in on a number of vacation rental sites.
              Below are our recommendations for sites where you might find
              pleasant accomodations.
            </p>
            {rentalData.map((t, i) => (
              <LocationBlock {...t} key={i} />
            ))}

            <h3>Hotels &amp; Inns</h3>
            {hotelData.map((t, i) => (
              <LocationBlock {...t} key={i} />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
