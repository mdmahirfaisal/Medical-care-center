import React from 'react';
import './Header.css';
import bannerImg from './image/OMUNMN0-removebg-preview.png';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header-background py-5 mb-4">
            <div className="container ">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-12 col-md-6 text-start">
                        <Fade left duration={2500} distance="50px">
                            <div className="py-3">
                                <h5 className="text-light ">Your Hospital</h5>
                                <h1 className="text-light fw-bold">We are a reliable partner</h1>

                                <p className="text-light"><Bounce right cascade>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Bounce></p> <br />

                                <Link to="/doctors"><button className="btn btn-outline-light p-3 rounded-pill">Find a doctor</button></Link>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <Fade right duration={2500} distance="50px">
                            <div className="img-bg-color">
                                <img className="img-fluid img-bg-color" src={bannerImg} alt="banner img" />
                            </div>
                        </Fade>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default Header;