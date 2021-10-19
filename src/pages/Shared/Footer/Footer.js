
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 col-md-5 text-start">
                        <img className="footer-logo" src="https://i.ibb.co/JqxhFv4/sammy-williams-38-Un6-Oi5be-E-unsplash.png" alt="Hot Onion" />
                    </div>
                    <div className="col-12 col-md-7 d-flex text-start text-light">
                        <div className=" me-2">
                            <p>About Online food</p>
                            <p>Read our blog</p>
                            <p>Sign up delivery</p>
                            <p>Add your restaurant</p>
                        </div>
                        <div className="ms-3">
                            <p>Get help </p>
                            <p>Read FAQs </p>
                            <p>View all cities </p>
                            <p>Restaurants near me </p>
                        </div>
                        <div className="text-light">
                            <Link to="/login"><button className="btn btn-outline-danger">Sign up to join </button></Link>

                        </div>
                    </div>

                </div>
            </div>

            <div className=" container d-flex align-items-center">
                <div><p className="text-light">Copyright &copy; 2021 Online food</p></div>
                <div className="ms-auto">
                    <Link className="text-decoration-none text-light ms-3">Privacy Policy.</Link>
                    <Link className="text-decoration-none text-light ms-3"> Terms of Use</Link>
                    <Link className="text-decoration-none text-light ms-3">Pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;