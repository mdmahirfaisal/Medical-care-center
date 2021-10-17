import React from 'react';
import Login from '../../Login/Login/Login';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="pt-4">
            <Header></Header>
            <Login></Login>
        </div>
    );
};

export default Home;