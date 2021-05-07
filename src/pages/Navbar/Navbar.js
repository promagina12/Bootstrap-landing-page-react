import React from "react";
import { Navbar, Nav,} from "react-bootstrap";
import "./Navbar.scss";

import MainContainer from "../MainContainer/MainContainer";

export default function MainNavbar() {
  return (
    <div className="background-1">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Landings</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Features</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <MainContainer />
    </div>
  );
}
