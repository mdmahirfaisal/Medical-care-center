import React from 'react';
import './ServiceDetail.css';
import { Link, useParams } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import serviceData from '../../fakeData/fakeData';



const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceData.find(serDetail => serDetail.id === serviceId);

    const { name, description, img, price } = service;

    return (
        <div className="mt-5 pt-5">
            <h2 className="text-secondary my-4 fw-bold">Details of the service you want to take are given </h2>
            <div className="container d-flex align-self-end">
                <div className="row d-md-flex align-items-center text-start shadow-sm p-2">
                    <div className="col-sm-12- col-md-5">
                        <h1 className="text-primary fw-bold"><Bounce bottom cascade duration={2000}>{name}</Bounce></h1>
                        <h2>Service id: ({serviceId})</h2>
                        <p><Bounce bottom cascade duration={2000}>{description}</Bounce></p>
                        <div className="d-flex align-items-center">
                            <h2 className=""> <span className="text-danger"><i className="fas fa-euro-sign me-2"> </i> {price}</span></h2>


                        </div>
                        <Link to="/addtocart"><button className="btn btn-danger mt-5 rounded-pill px-3"><i className="fas fa-cart-plus me-1"> </i> By this service</button></Link>

                    </div>
                    <div className="col-sm-12 col-md-7">
                        <Zoom duration={2500}>
                            <div className="container">
                                <img className="img-fluid p-5" src={img} alt="" />
                            </div>
                        </Zoom>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;