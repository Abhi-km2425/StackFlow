import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Button,} from "react-bootstrap";


function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-dark">
          StackFlow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" /> {/* Hamburger icon */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="fw-semibold mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="fw-semibold mx-2">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-semibold mx-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-2">
              <Button variant="outline-primary" size="sm">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
