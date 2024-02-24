// Header.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'; // add this line
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <h1>My Portfolio</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
