import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { sendMessage } from '../firebase'; 
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(formData); // Send the form data to Firebase
      alert("Message Sent! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h1 className="text-center mb-4">Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
