import React from "react";
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import { Layout } from "../components/Layout";
import { ActivityCard } from "../components/ActivityCard";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import hotelData from "../data/hotels.yaml";
import rentalData from "../data/rentals.yaml";
import travelData from "../data/travel.yaml";

const NavItemHeader = ({ children, ...props }) => {
  return (
    <NavItem className="my-2 text-muted" {...props}>
      <strong>{children}</strong>
    </NavItem>
  );
};

const StaySidebarMenu = props => (
  <aside className="sticky-top mb-3 d-none d-md-block">
    <Nav vertical>
      <NavItemHeader>Getting to Maine</NavItemHeader>

      {travelData.map((t, i) => {
        return (
          <NavItem key={i}>
            <NavLink href={`#travel-${i}`}>{t.label}</NavLink>
          </NavItem>
        );
      })}

      <NavItemHeader>Vacation Rentals</NavItemHeader>
      {rentalData.map((t, i) => {
        return (
          <NavItem key={i}>
            <NavLink href={`#rental-${i}`}>{t.label}</NavLink>
          </NavItem>
        );
      })}

      <NavItemHeader>Hotels</NavItemHeader>
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
    <Layout pageTitle="Where to Stay">
      <PageHeader title="Where to Stay" />

      <div className="my-5">
        <figure className="has-border">
          <img src="/static/img/hero/maine.png" className="img-fluid" />
        </figure>
      </div>

      <Container>
        <Row>
          <Col md={4}>
            <StaySidebarMenu />
          </Col>

          <Col>
            <p className="lead">
              Maine’s midcoast region is a beautiful destination for a summer
              vacation. Because we have two venues, there are a wide range of
              places you could stay for your visit — depending on your
              preferences. Generally speaking, anywhere between Portland, ME and
              Brunswick, ME along I-295 will suit you just fine, and we
              encourage you to explore the region while you’re here.
            </p>

            <Section>
              <SectionHeader
                title="Getting to Maine"
                className="text-md-center"
              />
              <p>
                Maine is a small state, and there are a number of ways to get
                here. The main airport is PWM, located in Portland, ME &mdash;
                but it can be a pricey destination, especially in summer.
              </p>
              <p>
                The next best airport is Boston Logan, in Boston, MA. From
                there, you can rent a car and take I-95 north to Portland. The
                drive is pleasant, and takes just about 2 hours.
              </p>
              <p>
                If renting a car is not your thing, Concord Coach Lines runs
                multiple buses every day from Boston Logan to the Portland
                Transportation Center.
              </p>

              <div className="my-3">
                {travelData.map((t, i) => (
                  <div id={`travel-${i}`}>
                    <ActivityCard {...t} key={i} />
                  </div>
                ))}
              </div>
            </Section>

            <hr />

            <Section>
              <SectionHeader
                title="Vacation Rentals"
                className="text-md-center"
              />
              <p>
                Our preferred accomodations when visiting Maine, you can find
                many beautiful homes to stay in on a number of vacation rental
                sites. Below are our recommendations for sites where you might
                find pleasant accomodations.
              </p>
              <div className="my-3">
                {rentalData.map((t, i) => (
                  <div id={`rental-${i}`}>
                    <ActivityCard {...t} key={i} />
                  </div>
                ))}
              </div>
            </Section>

            <hr />

            <Section>
              <SectionHeader
                title="Hotels &amp; Inns"
                className="text-md-center"
              />

              <div className="my-3">
                {hotelData.map((t, i) => (
                  <div id={`hotel-${i}`}>
                    <ActivityCard {...t} key={i} />
                  </div>
                ))}
              </div>
            </Section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
