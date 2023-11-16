import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com'; // Import the emailjs library

import './AlertForm.css';

function AlertForm() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using email.js
    emailjs.sendForm('service_co8iwbj', 'template_k8myg3a', e.target, '4Kq5MEeG7PjA7gTUI')
      .then(
        (result) => {
          console.log(result.text);
          // Display success message or perform other actions
        },
        (error) => {
          console.log(error.text);
          // Display error message or perform other actions
        }
      );

    handleClose();
  };

  useEffect(() => {
    // Trigger the modal to show when the component mounts
    handleShow();

    // Set up an interval to show the modal every 1 minute
    const intervalId = setInterval(() => {
      handleShow();
    }, 60000); // 60000 milliseconds = 1 minute

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs once on mount

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>
                <i className="fas fa-user"></i> Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ fontSize: '16px', borderRadius: '5px' }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>
                <i className="fas fa-envelope"></i> Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ fontSize: '16px', borderRadius: '5px' }}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>
                <i className="fas fa-phone"></i> Phone
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ fontSize: '16px', borderRadius: '5px' }}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>
                <i className="fas fa-comment"></i> Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ fontSize: '16px', borderRadius: '5px' }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AlertForm;
