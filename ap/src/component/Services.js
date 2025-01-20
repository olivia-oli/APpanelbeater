import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Service.css'; // Optional custom styling

function Services() {
  return (
    <section id="services" className="bg-light py-5">
      <Container>
        <h2>Our Services</h2>
        <Row className="d-flex justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>Panel Beating</Card.Title>
                <Card.Text>
                  Expert panel beating services for vehicles of all makes and
                  models. We restore your vehicle to its original condition.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>Scratch and Dent Repairs</Card.Title>
                <Card.Text>
                  We offer scratch and dent repairs to restore the appearance of
                  your car without compromising its structural integrity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>Accident Repairs</Card.Title>
                <Card.Text>
                  After an accident, trust us to get your vehicle back to top
                  condition, quickly and efficiently.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
