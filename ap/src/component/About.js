import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h2>About Us</h2>
            <p>
              We are a reliable panel beater service with over 10 years of
              experience. Our team specializes in high-quality repairs, dent
              removals, and accident damage fixes. We pride ourselves on our
              attention to detail and commitment to customer satisfaction.
            </p>
          </Col>
          <Col md={4}>
            <img
              src="/photos/Gallery 1.png"
              alt="About Us"
              className="img-fluid"
            />
            <img
              src="/photos/Gallery 3.png"
              alt="About Us"
              className="img-fluid"
            />
             <img
              src="/photos/Gallery 2.png"
              alt="About Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
