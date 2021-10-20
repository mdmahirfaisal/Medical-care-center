import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const links = {
        google: "https://www.google.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/?lang=en",
        youtube: "https://www.youtube.com/"
    };

    return (
        <div className="footer-container">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 col-md-6 text-start">
                        <img className="footer-logo" src="https://i.ibb.co/JqxhFv4/sammy-williams-38-Un6-Oi5be-E-unsplash.png" alt="hospital" />
                    </div>
                    <div className="col-12 col-md-6 d-flex text-start text-light">
                        <div className="">
                            <p>About Online services</p>
                            <p>Read our blog</p>
                            <p>Sign up booking</p>
                            <p>Add your Hospital</p>
                        </div>
                        <div className="ms-3">
                            <p>Get help </p>
                            <p>Read FAQs </p>
                            <p>View all cities </p>
                            <p>Hospitals near me </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="d-flex container mt-2">
                <a target="_blank" href={links.google} ><button className="btn btn-danger me-3 fs-6"><i className="fab fa-google"></i></button></a>
                <a target="_blank" href={links.facebook} ><button className="btn btn-danger me-3 fs-6"><i className="fab fa-facebook"></i></button></a> <br />
                <a target="_blank" href={links.twitter} ><button className="btn btn-danger me-3 fs-6"><i className="fab fa-twitter-square"></i></button></a>
                <a target="_blank" href={links.youtube} ><button className="btn btn-danger me-3 fs-6"><i className="fab fa-youtube-square"></i></button></a>
            </div>

            <div className=" container d-flex align-items-center">
                <div className="mt-2">
                    <small className="text-light"><i>Copyright &copy; 2021 Online Services</i></small>
                </div>
                <div className="ms-auto">
                    <Link className="text-decoration-none text-light ms-3">Privacy Policy.</Link>
                    <Link className="text-decoration-none text-light ms-3"> Terms of Use</Link>
                    <Link className="text-decoration-none text-light ms-3">Bookings</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;