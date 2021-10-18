import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, id } = service;

    console.log(service);
    return (
        <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 h-100">
            <Fade bottom duration={2500} distance="50px">

                <Link className="text-decoration-none" to={`/servicedetail/${id}`}>
                    <Card style={{ cursor: 'pointer' }}
                        className="border-0 py-4 "
                    >
                        <Card.Img variant="top" src={img} className="img-fluid" style={{ height: '50%' }} />
                        <Card.Body className="pt-0">
                            <Card.Title as="h5" className="my-3">{name}</Card.Title>
                            <Card.Title as="h4" className="my-3 text-danger">{price}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Fade>
        </div>
    );
};

export default Service;