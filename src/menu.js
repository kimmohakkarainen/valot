import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

function Menu({ personName, role }) {
  return (
    <Navbar sticky="top" collapseOnSelect bg="dark" variant="dark">
      <Navbar.Brand>Valot</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/">asetukset</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
