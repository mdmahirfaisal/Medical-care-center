import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Services></Services>
            <AboutUs></AboutUs>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;