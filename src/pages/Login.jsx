import React, { useState } from 'react';
import { Form, Button, Container, Tabs, Tab } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [activeTab, setActiveTab] = useState('user');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (activeTab === 'user') {
      navigate('/courses');
    } else {
      navigate('/adminCourses');
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Login to EduSphere</h2>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4 justify-content-center"
        variant="pills"
      >
        <Tab eventKey="user" title="User Login">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="userEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter user email" required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="userPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Login as User
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="admin" title="Admin Login">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="adminEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter admin email" required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="adminPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button type="submit" variant="secondary" className="w-100">
              Login as Admin
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Login;
