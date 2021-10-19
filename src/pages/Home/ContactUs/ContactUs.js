import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    const handleContactForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact-container mt-5 pt-5 container">
            <h2>Contact us</h2>
            <Form onSubmit={handleContactForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />

                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Comment box</Form.Label>
                    <Form.Control type="text-field" placeholder="Password" />
                </Form.Group>

                <Button className=" btn btn-danger w-75 rounded-pill px-3 py-1" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default ContactUs;