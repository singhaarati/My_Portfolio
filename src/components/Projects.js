// Projects.js
import React from 'react';
import { Card, Col, Container, Row, ListGroup } from 'react-bootstrap'; // add this line
import '../styles/Projects.css'; // import your custom CSS file

function Projects() {
  const projects = [
    { name: 'Food-Waste-Prediction', frontendLink: 'https://github.com/singhaarati/Food-Waste-Prediction-Thesis.git' },
    { name: 'TripPlanner', frontendLink: 'https://github.com/singhaarati/TripPlanner-web-frontend.git', backendLink: 'https://github.com/singhaarati/TripPlanner-web-api.git' },
    { name: 'singh_restaurant', frontendLink: 'https://github.com/singhaarati/singh_restaurant.git' },
  ];

  return (
    <section id="projects">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Projects</h2>
            {projects.map((project, index) => (
              <Card key={index}>
                <Card.Body>
                  <Card.Title className="card-title">{project.name}</Card.Title>
                  <ListGroup>
                    <ListGroup.Item action href={project.frontendLink} target="_blank" rel="noopener noreferrer">Frontend</ListGroup.Item>
                    {project.backendLink && (
                      <ListGroup.Item action href={project.backendLink} target="_blank" rel="noopener noreferrer">Backend</ListGroup.Item>
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
