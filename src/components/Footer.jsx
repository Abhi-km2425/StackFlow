import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-top py-4">
      <Container>
        <Row className="g-4">
          {/* Brand + Mission */}
          <Col md={6} lg={4}>
            <h5 className="fw-bold mb-3 text-primary">
              <FaBook className="me-2" /> StackFlow
            </h5>
            <p className="small text-muted">
              Your gateway to skill-building courses. Learn from experts, teach what you love.
            </p>
          </Col>

          {/* Quick Links (Condensed) */}
          <Col md={3} lg={2}>
            <h6 className="fw-bold mb-3 small">Explore</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/courses" className="small text-decoration-none">Courses</a></li>
              <li className="mb-2"><a href="/instructors" className="small text-decoration-none">Teach</a></li>
              <li className="mb-2"><a href="/pricing" className="small text-decoration-none">Pricing</a></li>
            </ul>
          </Col>

          {/* Legal (Condensed) */}
          <Col md={3} lg={2}>
            <h6 className="fw-bold mb-3 small">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/privacy" className="small text-decoration-none">Privacy</a></li>
              <li className="mb-2"><a href="/terms" className="small text-decoration-none">Terms</a></li>
            </ul>
          </Col>

          {/* Newsletter (Compact) */}
          <Col lg={4}>
            <h6 className="fw-bold mb-3 small">Get Updates</h6>
            <div className="d-flex">
              <Form.Control 
                type="email" 
                placeholder="Email" 
                size="sm" 
                className="rounded-0 border-end-0"
              />
              <Button variant="primary" size="sm" className="rounded-0">
                <FaChalkboardTeacher />
              </Button>
            </div>
          </Col>
        </Row>

        {/* Copyright (Single Line) */}
        <Row className="mt-3">
          <Col className="text-center small text-muted">
            © {new Date().getFullYear()} StackFlow. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;