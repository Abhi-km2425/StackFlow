import React from 'react'
import NavBar from '../components/NavBar'
import { Button, Container } from 'react-bootstrap'
import './Home.css'
import {  useNavigate } from 'react-router-dom'

function Home() {
   const navigate = useNavigate()
  return (
    <>
    
    <NavBar/>
   <div className="hero-section">
      <div className="overlay">
        <div className="hero-content text-center text-white">
<h1 className="display-4 mb-3">
  Welcome to <span className="stackflow-highlight">StackFlow</span>
</h1>
          <p className="lead mb-4">Start your learning journey today with expert-crafted courses.</p>
        <Button variant="primary" size="lg" onClick={() => navigate('/courses')}>
            Explore Courses
          </Button>
        </div>
      </div>
    </div>    
    
    </>
  )



}

export default Home