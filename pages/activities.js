import classnames from "classnames";
import _ from "lodash";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledTooltip
} from "reactstrap";
import Head from "next/head";
import { Icon } from "../components/Icon";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import activityData from "../data/activities.yaml";

const FavoriteTag = ({ id, ...props }) => {
  return (
    <div className="favorite" id={`favorite-${id}`}>
      <Icon className="typcn typcn-star" />
      <UncontrolledTooltip placement="top" target={`favorite-${id}`}>
        Our Favorite!
      </UncontrolledTooltip>
    </div>
  );
};

const ActivityCard = ({ label, website, description, map, id, favorite, ...props }) => {
  return (
    <Card className="mb-3" {...props}>
      <CardBody>
        {favorite && <FavoriteTag id={`${id}`} />}
        <CardTitle>
          <strong>{label}</strong>
        </CardTitle>
        <p>{description}</p>
        {map && (
          <p>
            <Icon className="typcn typcn-map" />{" "}
            <a href={map} title={`Map to ${label}`} target="_blank">
              View on Map
            </a>
          </p>
        )}

        {website && (
          <p>
            <Icon className="typcn typcn-compass" />{" "}
            <a href={website} title={`Link to ${label}`} target="_blank">
              View Website
            </a>
          </p>
        )}
      </CardBody>
    </Card>
  );
};

const TabNavLink = ({ activeTab, tabId, onClick, children, ...props }) => {
  const active = activeTab == tabId;
  return (
    <NavItem {...props}>
      <NavLink
        href={`#${tabId}`}
        className={classnames({ active: active })}
        onClick={() => onClick(tabId)}
      >
        {children}
      </NavLink>
    </NavItem>
  );
};

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
