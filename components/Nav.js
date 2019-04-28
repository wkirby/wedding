import React from "react";
import {
  Container,
  Collapse,
  Nav as BSNav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import ActiveLink from "./ActiveLink";
import ReactTooltip from "react-tooltip";

const Logo = props => (
  <h1 className="logotype">
    <img src="/static/img/berry.png" alt="berries" />
    Wyatt <em>&amp;</em> Jessica
  </h1>
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
        className="centered wj mb-5"
      >
        <NavbarBrand href="/" className="mr-auto d-inline-block d-md-none">
          <Logo />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <BSNav navbar>
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
                <ReactTooltip
                  delayShow={350}
                  place="bottom"
                  type="dark"
                  effect="solid"
                />
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
          </BSNav>
        </Collapse>
      </Navbar>
    );
  }
}
