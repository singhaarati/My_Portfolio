// About.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import profileImage from '../images/ok.jpg';
import '../styles/About.css'; 

function About() {
  return (
    <section id="about">
      <Container>
        <Row className="items-center">
          <Col md={6}>
            <img src={profileImage} alt="Profile" className="profile-img" />
          </Col>
          <Col md={6}>
            <div className="about-content">
              <h2 className="text-2xl md:text-4xl font-semibold mb-4">About Me</h2>
              <p className="mb-4">I am an ambitious software engineering student pursuing a Bachelor's degree in Computer Science at Coventry University, set to graduate in December. Eager to leverage my comprehensive education and hands-on experience in various programming languages and technologies, I am actively seeking job opportunities or internships to further enhance my skills and contribute to real-world projects.</p>
              <Button className="resume-btn" onClick={() => window.open('https://github.com/singhaarati/Aarati_Kumari_Singh_CV.git', '_blank')} download>Download Resume</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
