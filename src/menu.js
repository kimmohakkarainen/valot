import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Button
} from "react-bootstrap";

function Menu({ personName, role }) {
  return (
    <Navbar sticky="top" collapseOnSelect bg="dark" variant="dark">
      <Navbar.Brand>Valot</Navbar.Brand>
    </Navbar>
  );
}

export default Menu;
