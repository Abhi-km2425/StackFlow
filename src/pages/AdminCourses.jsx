import React, { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import AllCourses from '../components/AllCourses';
import NavBar from '../components/NavBar';

function AdminCourses() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
    <NavBar/>
    
     <Container className="py-5">
      {/* Heading + Button row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Welcome to Admin Dashboard</h2>
        <Button variant="primary" onClick={handleOpenModal}>
          + Add Course
        </Button>
      </div>

      {/* component */}
      <AllCourses/>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Course Title</Form.Label>
              <Form.Control type="text" placeholder="Enter course title" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="Enter image link" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" step="0.1" max="5" placeholder="Enter rating" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter course description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save (Demo)
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

    </>
  )
}

export default AdminCourses