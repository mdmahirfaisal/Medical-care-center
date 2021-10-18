import { Container, Nav, Navbar } from "react-bootstrap";
import Bounce from 'react-reveal/Bounce';

import { HashLink } from 'react-router-hash-link';

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";




const NavigationBar = () => {
    const { user, logOut } = useAuth();
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);


    //////////

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (

        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            className={isSticky || isCollapsed ? "shadow-sm bg-light py-2 nav-container mb-5" : "py-4 mb-5"} >
            <Container className="container" fluid>
                <Navbar.Brand as={HashLink} to="/home" className="text-danger fs-4 fw-bold"><Bounce bottom cascade duration={2000}>Medical care </Bounce></Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                    <Nav
                        className="me-auto ms-3"
                        style={{ maxHeight: '110px' }}
                        navbarScroll
                    >
                        <Nav.Link className=" text-dark fs-6" as={HashLink} to="/home#home" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                        <Nav.Link className=" text-dark fs-6" as={HashLink} to="/home#services" active>Services</Nav.Link>
                        <Nav.Link className=" text-dark fs-6" as={HashLink} to="/home#about" active>About us </Nav.Link>
                    </Nav>
                    <Nav className="d-sm-flex align-items-center">
                        <Link className=" text-dark fs-5 me-4" to="/home" style={{ cursor: "pointer" }}><i className="fas fa-cart-plus "></i></Link>



                        {user.email ?
                            <Link onClick={logOut} to="/home" style={{ cursor: "pointer" }} className="text-dark fs-5 text-decoration-none me-3"><i className="fas fa-sign-out-alt"></i></Link>
                            :
                            <Link to="/login" style={{ cursor: "pointer" }} className="text-dark fs-5 text-decoration-none">Sign up</Link>
                        }

                        {
                            user.email ? <span className="text-primary fs-5">{user.displayName || user.email}</span> : ""
                        }
                    </Nav>
                    <Navbar.Text className="ms-2 ">

                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;