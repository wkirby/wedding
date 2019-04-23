import { LevelItem } from "bloomer";
import Link from "next/link";
import React from "react";
import ReactTooltip from 'react-tooltip'
import ActiveLink from "./ActiveLink";
import { Level } from "bloomer/lib/components/Level/Level";

const Logo = props => (
  <h1 className="logotype">
    <img src="/static/img/berry.png" alt="berries" style={{ height: 40 }} />
    Wyatt <em>&amp;</em> Jessica
  </h1>
);

const NavItem = ({ children, ...props }) => (
  <LevelItem>
    <ActiveLink {...props}>
      <a className="nav-item">{children}</a>
    </ActiveLink>
  </LevelItem>
);

export const Nav = props => {
  return (
    <nav className="nav">
      <Level>
        <NavItem activeClassName="is-active" href="/venues">
          the venues
        </NavItem>

        <NavItem activeClassName="is-active" href="/stay">
          where to stay
        </NavItem>

        <LevelItem>
          <ActiveLink href="/">
            <a data-tip="Home">
              <Logo />
              <ReactTooltip delayShow={350} place="bottom" type="dark" effect="solid" />
            </a>

          </ActiveLink>
        </LevelItem>

        <NavItem activeClassName="is-active" href="/activities">
          what to do
        </NavItem>

        <NavItem activeClassName="is-active" href="/registry">
          registry
        </NavItem>
      </Level>
    </nav>
  );
};
