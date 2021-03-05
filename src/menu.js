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
    <Container>
      <Navbar
        sticky="top"
        collapseOnSelect
        bg="sata-light"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand>Valot</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/">Lausuttavat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Menu;
