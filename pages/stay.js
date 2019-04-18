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
import _ from 'lodash';

import hotelData from "../data/hotels.yaml";

console.log(hotelData);

export default () => {
  return (
    <Layout>
      <Columns isCentered>
        <Column isSize="1/3">
          <Menu>
            <MenuLabel>Hotels</MenuLabel>
            <MenuList>
              <li>
                <MenuLink>Best Western</MenuLink>
              </li>
              <li>
                <MenuLink>The Brunswick Inn</MenuLink>
              </li>
            </MenuList>

            <MenuLabel>Vacation Rentals</MenuLabel>
            <MenuList>
              <li>
                <MenuLink>AirBnB</MenuLink>
              </li>
              <li>
                <MenuLink>VRBO</MenuLink>
              </li>
            </MenuList>
          </Menu>
        </Column>
        <Column>
          <Title>Where to Stay</Title>
          <Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, minima rerum corporis doloribus fugiat explicabo
              perspiciatis eius, totam, ducimus sed quos fuga! Excepturi
              expedita in, rerum eius placeat repudiandae repellat.
            </p>
          </Content>
        </Column>
      </Columns>
    </Layout>
  );
};
