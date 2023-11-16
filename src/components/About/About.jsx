import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./About.css"

function About() {
    return (
        <div>
            <div id='about' className="projects-container mt-5">
                <div className="text-center">
                    <h1>ABOUT Us</h1>

                </div>
            </div>

            <Container>
                <Row className='mt-2'>



                    <Col md={6}>
                 

                        <p>At SOBHA, passion drives everything we do. We don't just say it, we live it. Our founder, Mr. PNC Menon, instilled in us a commitment to creating world-class quality products and workmanship. This means we don't cut corners when it comes to building best-in-class properties.

                            Our track record of creating award-winning properties across India speaks for itself. We've changed the skyline in Bangalore, created landmark developments in Kerala, and are expanding into Delhi-NCR, Chennai, Coimbatore, Mysore, Pune, and beyond.

                            As we look to the future, we remain committed to creating urban living spaces that are smart, sustainable, and meet the needs of people to live, work, and play. We recognize the challenges of rapid urbanization and will continue to provide intelligent solutions that are sustainable and responsible.

                            Our people are the key to our success. We rely on their capacity to innovate and their use of technology to create immense value for all our stakeholders. We will continue to raise the bar and set new standards in the industry to achieve our goal of providing urban living spaces that are of the highest quality.</p>
                    </Col>
                    <Col md={6}>
                 <div className="about-img">

                 </div>

                    </Col>

               
                </Row>
            </Container>
        </div>

    )
}

export default About