import React from 'react';
import './AboutUs.css';
import coverImg from './image/4-doctors.PNG';
import Fade from 'react-reveal/Fade';

const AboutUs = () => {



    return (
        <div id="about" className="about-bg">
            <div className="container pt-4 ">
                <Fade bottom duration={2500} distance="50px">
                    <h1 className="text-dark">ALL YOU NEED <br /><span className="text-success fw-bold">FOR YOUR HAPPINESS</span></h1>
                    <p className="text-secondary">One of the main benefits of this theme is being specialized
                        for healthcare and medical business.</p></Fade>
                <div className="d-md-flex align-items-center justify-content-center pt-3 about-icons">
                    <Fade bottom duration={2500} distance="50px">
                        <div className="p-1">
                            <i className="far fa-clock fs-1 mb-2 p-2"></i>
                            <p>Show visiting hours</p>
                            <h3 className="text-secondary">Timetable</h3>
                        </div>

                        <div className="p-1 middle-div">
                            <i className="fas fa-book-medical fs-1 mb-2 p-2"></i>
                            <p>Make an appointment</p>
                            <h3 className="text-secondary">Online booking</h3>

                        </div>

                        <div className="p-1 ">
                            <i className="fas fa-sync-alt fs-1 mb-2 p-2"></i>
                            <p>Showcase your work</p>
                            <h3 className="text-secondary">Before & After</h3>

                        </div>
                    </Fade>
                </div>
            </div>
            <div className="cover-image pt-3">
                <img className="img-fluid fixed" src={coverImg} alt="4 doctors" />
            </div>

        </div>
    );
};

export default AboutUs;