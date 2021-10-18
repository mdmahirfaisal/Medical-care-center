import React from 'react';
import './Services.css';
import servicesDta from '../../fakeData/fakeData';
import Service from '../Service/Service';
import Fade from 'react-reveal/Fade';

const Services = () => {
    return (
        <div id="services" className="container my-5 ">
            <Fade bottom duration={2500} distance="50px">
                <h2 className="fw-bold text-secondary pt-3">OUR LATEST SERVICES</h2>
            </Fade>
            {/* <button className="btn btn-outline-success py-3 px-4 rounded-pill">View More</button> */}

            <div className="row mt-2">
                {
                    servicesDta.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;