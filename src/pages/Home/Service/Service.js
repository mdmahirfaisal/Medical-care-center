import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, id } = service;
    const { setModalShow } = useAuth()

    return (
        <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">
            <Fade bottom duration={2500} distance="50px">

                {<Link className="text-decoration-none" onClick={() => setModalShow(true)} to={`/servicedetail/${id}`}>
                    <Card style={{ cursor: 'pointer' }}
                        className="border-0 h-100"
                    >
                        <Card.Img variant="top" src={img} className="img-fluid p-3 service-image" />
                        <Card.Body className="pt-0">
                            <Card.Title as="h5" className="">{name}</Card.Title>
                            <Card.Title as="h4" className=" text-danger"><i className="fas fa-euro-sign me-1"> </i> {price}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>}
            </Fade>
        </div>
    );
};

export default Service;