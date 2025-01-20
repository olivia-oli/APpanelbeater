import React from "react";
import { Container } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <h2>3114 Mpumelelo St, Devland, Soweto, 1811</h2>
        <h3>contact: 067 561 1582</h3>
        <p>&copy; 2025 AP Panel Beater . All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
