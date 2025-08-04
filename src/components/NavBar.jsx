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
      <Navbar className="navcontainer" bg="" data-bs-theme="">
        <Container className=" justify-content-between">
          <Navbar.Brand as={Link} to="/">
            EduSphere
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <Button>Login</Button>
            </Nav.Link>
          </Nav>
         
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
