import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;