import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';


function AllCourses() {
      const courses = [
    {
      id: 1,
      title: "React Basics",
      image: "https://yourserveradmin.com/wp-content/uploads/2020/04/react.jpg",
      price: "999",
      rating: "4.5",
      description: "A beginner-friendly course to learn the basics of React."
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      image: "https://www.squash.io/wp-content/uploads/2023/11/javascript-series.jpg",
      price: "799",
      rating: "4.3",
      description: "Master JavaScript with hands-on examples and exercises."
    },
    {
      id: 3,
      title: "HTML & CSS Essentials",
      image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/25674217/original/2a01de88ea8af82f1856e2018c32bc223e99ae31/fix-the-html-and-css-issues.jpg",
      price: "499",
      rating: "4.7",
      description: "Build beautiful websites using HTML5 and CSS3."
    },
    {
  id: 4,
  title: "Node.js Essentials",
  image: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
  price: "1099",
  rating: "4.4",
  description: "Get started with backend development using Node.js and Express."
},
{
  id: 5,
  title: "Data Structures in Java",
  image: "https://www.aegissofttech.com/insights/wp-content/uploads/2024/06/why-do-we-need-java-technology.jpg",
  price: "899",
  rating: "4.2",
  description: "Learn core data structures and algorithms in Java from scratch."
},
{
  id: 6,
  title: "SQL & Databases",
  image: "https://static.tildacdn.com/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg",
  price: "699",
  rating: "4.6",
  description: "Understand relational databases and master SQL queries."
},
{
  id: 7,
  title: "UI/UX Design Fundamentals",
  image: "https://img.freepik.com/premium-photo/ui-ux-design-template-ai-generated-image_894117-1501.jpg?w=740",
  price: "599",
  rating: "4.3",
  description: "Learn the basics of user interface and experience design."
},
{
  id: 8,
  title: "Django for Web Development",
  image: "https://mertcangokgoz.com/wp-content/uploads/django-python-grosel.png",
  price: "999",
  rating: "4.5",
  description: "Develop powerful web apps using Python and Django framework."
},
{
  id: 9,
  title: "Mobile App Dev with React Native",
  image: "https://roiresources.co.uk/wp-content/uploads/2021/10/react-native-mobile-app-development.jpg",
  price: "1199",
  rating: "4.4",
  description: "Build cross-platform mobile apps with React Native and Expo."
}
      ]

  return (
  <>
       
          <Container className="py-5">
            <h2 className="text-center mb-4">Explore Our Courses</h2>
            <Row>
              {courses.map((course) => (
                <Col key={course.id} sm={12} md={6} lg={4}>
                  <CourseCard course={course} />
                </Col>
              ))}
            </Row>
          </Container>
  </>

    
  )
}

export default AllCourses