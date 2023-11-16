// ApartCard.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './ApartCard.css';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/banglore1.jpg'
import img2 from '../../assets/img/banglore2.jpg'
import img3 from '../../assets/img/banglore3.jpg'
import img4 from '../../assets/img/banglore4.jpg'
import img5 from '../../assets/img/banglore5.jpg'
import img6 from '../../assets/img/banglore6.jpg'

function ApartCard( ) {
  return (
    <Container fluid className="cards-container">
 
    <Row>
        <Col lg={4} md={12}>
            <Card>
                <Link to={'./Single'}>
                    <Card.Img variant="top" src={img1} alt="Apartment" />
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
                <Link to={'./Single'}>
                    <Card.Img variant="top" src={img2} alt="Apartment" />
                    <Card.Body>
                        <Card.Title className='title'>City View Residences</Card.Title>

                    </Card.Body>
                    <div className="flat-space-badge">3bhk</div>
                </Link>
            </Card>
        </Col>
        <Col lg={4} md={12}>
            <Card>
                <Link to={'./Single'}>

                    <Card.Img variant="top" src={img3} alt="Apartment" />
                    <Card.Body>
                        <Card.Title className='title'>Lake View Building</Card.Title>

                    </Card.Body>
                    <div className="flat-space-badge">3bhk</div>
                </Link>

            </Card>
        </Col>
    </Row>
    <Row>
        <Col lg={4} md={12}>
            <Card>
                <Link to={'./Single'}>
                    <Card.Img variant="top" src={img4} alt="Apartment" />
                    <Card.Body>
                        <Card.Title className='title'>Forest View Building </Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <div className="flat-space-badge">2bhk</div>
                </Link>
            </Card>
        </Col>
        <Col lg={4} md={12}>
            <Card>
                <Link to={'./Single'}>
                    <Card.Img variant="top" src={img5} alt="Apartment" />
                    <Card.Body>
                        <Card.Title className='title'>Ultra Luxury Apartments</Card.Title>

                    </Card.Body>
                    <div className="flat-space-badge">3bhk</div>
                </Link>
            </Card>
        </Col>
        <Col lg={4} md={12}>
            <Card>
                <Link to={'./Single'}>

                    <Card.Img variant="top" src={img6} alt="Apartment" />
                    <Card.Body>
                        <Card.Title className='title'>Rajasthan Building</Card.Title>

                    </Card.Body>
                    <div className="flat-space-badge">2bhk</div>
                </Link>

            </Card>
        </Col>
    </Row>
</Container>
  );
}

export default ApartCard;
