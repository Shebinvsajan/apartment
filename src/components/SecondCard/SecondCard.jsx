// SecondCard.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import hy1 from "../../assets/img/hy2.jpg";
import hy2 from "../../assets/img/hy3.jpg";
import hy3 from "../../assets/img/hy4.jpg";
import './Second.css'
import { Link } from 'react-router-dom';

function SecondCard() {
    return (
        <Container fluid className="cards-container">
            <div className="projects-container">
                <h2 className='card-hyd'>
                    Luxury Apartments Spread across <span className="highlighted">Hyd</span>erabad.
                </h2>
            </div>
            <Row>
                <Col lg={4} md={12}>
                    <Card>
                        <Link to={'./singlehy'}>
                            <Card.Img variant="top" src={hy1} alt="Apartment" />
                            <Card.Body>
                                <Card.Title className='title'>Luxury Apartments </Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <div className="flat-space-badge">2bhk</div>
                        </Link>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card>
                        <Link to={'./singlehy'}>
                            <Card.Img variant="top" src={hy2} alt="Apartment" />
                            <Card.Body>
                                <Card.Title className='title'>Ultra Luxury Apartments</Card.Title>

                            </Card.Body>
                            <div className="flat-space-badge">2bhk</div>
                        </Link>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card>
                        <Link to={'./singlehy'}>

                            <Card.Img variant="top" src={hy3} alt="Apartment" />
                            <Card.Body>
                                <Card.Title className='title'>Luxury Apartments</Card.Title>

                            </Card.Body>
                            <div className="flat-space-badge">2bhk</div>
                        </Link>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SecondCard;
