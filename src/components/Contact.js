// Contact.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col>
            <h2>Contact Me</h2>
            <div className="contact-info">
              <p>Email: <a href="mailto:aaratisingh0621@gmail.com">aaratisingh0621@gmail.com</a></p>
              <p>Phone: <a href="tel:+9779824603295">+977 9824603295</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
