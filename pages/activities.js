import _ from "lodash";
import React from "react";
import {
  Container,
  Nav,
  TabContent,
  TabPane} from "reactstrap";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import activityData from "../data/activities.yaml";
import { ActivityCard } from "../components/ActivityCard";
import { TabNavLink } from "../components/TabNavLink";

class ActivityPage extends React.Component {
  constructor(props) {
    super(props);

    this.tabs = Object.keys(activityData);
    this.state = {
      activeTab: this.tabs[0]
    };
  }

  componentDidMount = () => {
    if (window.location.hash) {
      let hash = window.location.hash.substring(1);
      if (this.tabs.includes(hash)) {
        this.setState({ activeTab: hash });
      }
    }
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render = () => {
    return (
      <Layout pageTitle="What to Do">
        <PageHeader title="What to Do" />

        <Container className="is-narrow">
          <p className="lead">
            We are so excited to share Maine with all of our guests, and all our
            favorite things to do up and down the coast of Maine. If you have
            any questions about any activities, please don't hesitate to ask!
          </p>

          <Section>
            <Nav pills justified className="mb-3">
              {_.map(activityData, (region, id) => {
                return (
                  <TabNavLink
                    key={id}
                    tabId={id}
                    onClick={this.toggle}
                    activeTab={this.state.activeTab}
                  >
                    {region.label}
                  </TabNavLink>
                );
              })}
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              {_.map(activityData, (region, id) => {
                return (
                  <TabPane tabId={id} key={id}>
                    {_.map(region.items, (item, i) => (
                      <ActivityCard id={`${id}-${i}`} key={i} {...item} />
                    ))}
                  </TabPane>
                );
              })}
            </TabContent>
          </Section>
        </Container>
      </Layout>
    );
  };
}

export default ActivityPage;
