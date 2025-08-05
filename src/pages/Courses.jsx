import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import AllCourses from "../components/AllCourses";
import Footer from '../components/Footer'
//carousal
import Carousel from "react-bootstrap/Carousel";
import './Courses.css'

export default function Courses() {
  return (
    
    <>
      <NavBar />
      {/* carousal */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.pinimg.com/736x/ec/59/4d/ec594d5b9cd8e8cbc939a8744370d661.jpg"
            alt="Top instructors"
          />
          <Carousel.Caption>
            <h3>Learn From Top Instructors</h3>
            <p>
              Join thousands of learners and get taught by the best in the
              industry.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.pinimg.com/736x/95/fe/7a/95fe7a6efd8ed2054a5552dda2d78731.jpg"
            alt="Hands-on learning"
          />
          <Carousel.Caption>
            <h3>Build Real Projects</h3>
            <p>
              Practice with hands-on projects and sharpen your skills with
              confidence.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.pinimg.com/1200x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg"
            alt="Flexible schedule"
          />
          <Carousel.Caption>
            <h3>Learn Anytime, Anywhere</h3>
            <p>Study at your own pace, on your schedule, from any device.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5">
        <h2 className="text-center mb-4">Explore Our Courses</h2>

        <p className="text-center text-muted mb-5">
          Browse our handpicked collection of professional courses designed to
          boost your skills in programming, design, and development.
        </p>

        <div className="d-flex justify-content-end mb-4">
          <select className="form-select w-auto">
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <AllCourses />
       
      </Container>
       <Footer/>
    </>
  );
}
