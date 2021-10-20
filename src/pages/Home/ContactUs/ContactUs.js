import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    const handleContactForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact-container  pt-5 ">
            <h2 className="fw-bold text-primary pt-5">Contact us</h2>
            <div className="container">
                <Form onSubmit={handleContactForm} className="shadow p-4 contact-form bg-light">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />

                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Write Your Comment</Form.Label>
                        <Form.Control style={{ height: '200px ' }} type="text" placeholder="" />
                    </Form.Group>

                    <Link to="/home">
                        <Button className=" btn btn-danger w-75 rounded-pill px-3 py-1" type="submit">
                            Submit
                        </Button>
                    </Link>
                </Form>
            </div>

        </div>
    );
};

export default ContactUs;