import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import './About.css';
import Footer from '../components/Footer';

function About() {
  const teamMembers = [
    {
      name: 'Abhijith K M',
      role: 'Frontend Developer',
      image: 'https://tse3.mm.bing.net/th/id/OIP.Cbcrb0QavaVflRT7CSJINwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Crafting pixel-perfect UIs with React and TypeScript.'
    },
    {
      name: 'Riya S',
      role: 'UI/UX Designer',
      image: 'https://tse2.mm.bing.net/th/id/OIP.Oj2n8kjynMCzB9aAObBefwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Human-centered design for seamless learning.'
    },
    {
      name: 'Aarav M',
      role: 'Project Coordinator',
            image: 'https://thumbs.dreamstime.com/b/cartoon-businessman-presenting-pose-cartoon-businessman-presenting-pose-328562476.jpg',

      description: 'Turning ideas into organized execution.'
    }
  ];

  return (
    <>
      <NavBar />
      <Container className="about-container py-5">

        {/*  Hero Section  */}
        <section className="mb-5">
          <Row className="align-items-center g-5">
            <Col md={6} className="order-md-2">
              <h1 className="display-5 fw-bold mb-4">Redefining <span className="text-primary">Edu</span>cation</h1>
              <p className="lead text-muted">
                EduSphere bridges the gap between learners and instructors with intuitive tools, 
                empowering anyone to teach or learn from anywhere.
              </p>
            </Col>
            <Col md={6} className="order-md-1">
              <Image 
                src="https://i.pinimg.com/736x/41/54/c7/4154c780b69fafa3e01f738d635c258c.jpg" 
                alt="EduSphere platform" 
                fluid 
                className="rounded-3 shadow"
              />
            </Col>
          </Row>
        </section>

        {/*  2. Stats Cards */}
        <section className="my-5 py-4 bg-light rounded-3">
          <h2 className="text-center mb-4 fw-semibold">By the Numbers</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="border-0 bg-white shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <h3 className="text-primary fw-bold">1M+</h3>
                  <p className="mb-0 text-secondary">Students Empowered</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 bg-white shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <h3 className="text-primary fw-bold">500+</h3>
                  <p className="mb-0 text-secondary">Expert Instructors</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 bg-white shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <h3 className="text-primary fw-bold">1200+</h3>
                  <p className="mb-0 text-secondary">Courses Available</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/*  Team  */}
        <section className="my-5">
          <h2 className="text-center mb-5 fw-semibold">Who Builds EduSphere</h2>
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="border-0 h-100 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={100}
                      height={100}
                      className="rounded-circle mb-3 object-fit-cover"
                    />
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-muted small mb-3">{member.role}</p>
                    <p className="mb-0">{member.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
      <Footer/>

    </>
  );
}

export default About;