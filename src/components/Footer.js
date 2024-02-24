// Footer.js
import React from 'react';
import '../styles/Footer.css';
import { Container, Row, Col } from 'react-bootstrap'; // add this line

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 My Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
