import React from 'react';
import { Card } from 'react-bootstrap';
import './CourseCard.css'

export default function CourseCard({ course }) {
  if (!course) return null; 
  return (
<>
      <Card style={{ width: '18rem' }} className="mb-4 shadow-sm course-card">
        <Card.Img className="course-img" variant="top" src={course.image} alt={course.title} />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>Price: ₹{course.price}</Card.Text>
          {course.rating && <Card.Text>Rating: ⭐ {course.rating}</Card.Text>}
          <Card.Text>{course.description}</Card.Text>
        </Card.Body>
      </Card>

</>

   
  );
}
