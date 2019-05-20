import React from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import { Collapse, Nav as BSNav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import ActiveLink from "./ActiveLink";

const Logo = () => (
  <div className="logo">
    <img src="/static/img/berry.png" alt="berries" className="logo__image" />
    <h1 className="logotype">
      Wyatt <small><em>&amp;</em></small> Jessica
    </h1>
  </div>
);

export class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar
        color="transparent"
        light
        expand="md"
        className="centered wj mb-md-3 pt-2 pt-md-3"
      >
        <NavbarBrand href="/" className="mr-auto d-inline-block d-md-none">
          <Logo />
        </NavbarBrand>

        <HamburgerSqueeze
          buttonWidth={32}
          toggleButton={this.toggleNavbar}
          className="ml-auto collapse-button navbar-toggler"
          isActive={!this.state.collapsed}
        />

        <Collapse isOpen={!this.state.collapsed} navbar>
          <BSNav navbar>
            <NavItem>
              <ActiveLink href="/">
                <NavLink>Home</NavLink>
              </ActiveLink>
            </NavItem>
            <NavItem>
              <ActiveLink href="/venues">
                <NavLink>The Venues</NavLink>
              </ActiveLink>
            </NavItem>
            <NavItem>
              <ActiveLink href="/stay">
                <NavLink>Where to Stay</NavLink>
              </ActiveLink>
            </NavItem>

            <NavItem className="d-none d-md-inline-block">
              <NavbarBrand href="/">
                <Logo />
              </NavbarBrand>
            </NavItem>

            <NavItem>
              <ActiveLink href="/activities">
                <NavLink>What to Do</NavLink>
              </ActiveLink>
            </NavItem>
            <NavItem>
              <ActiveLink href="/registry">
                <NavLink>Registry</NavLink>
              </ActiveLink>
            </NavItem>
            <NavItem>
              <ActiveLink href="/rsvp">
                <NavLink>RSVP</NavLink>
              </ActiveLink>
            </NavItem>
          </BSNav>
        </Collapse>
      </Navbar>
    );
  }
}
