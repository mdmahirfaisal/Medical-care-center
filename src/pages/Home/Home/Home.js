import React from 'react';
import useAuth from '../../../hooks/useAuth';
import ShowModal from '../../Login/ShowModal/ShowModal';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const { modalShow, setModalShow } = useAuth();
    return (
        <div className="">
            <ShowModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false)
                }}
            ></ShowModal>
            <Header></Header>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;