import { Container, Nav, Navbar } from "react-bootstrap";
import Bounce from 'react-reveal/Bounce';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const NavigationBar = () => {
    const { user, logOut, setModalShow } = useAuth();
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
                        <Nav.Link className=" text-dark fs-6" as={HashLink} to="/home#about" active>About</Nav.Link>
                        {
                            user.email ? <Nav.Link className=" text-dark fs-6" as={HashLink} to="/contact" active>Contact us </Nav.Link>
                                : <Nav.Link as={HashLink} to="/login" onClick={() => setModalShow(true)} className="text-dark fs-6" active>Contact us</Nav.Link>
                        }
                    </Nav>
                    <Nav className="d-sm-flex align-items-center">
                        {user.email ? <Link className=" text-dark fs-3 me-4 text-decoration-none" to="/addtocart" style={{ cursor: "pointer" }}><i className="fas fa-cart-plus"></i></Link>
                            :
                            <Link to="/login" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-3 me-4 text-decoration-none"><i className="fas fa-cart-plus"></i></Link>
                        }

                        {user.email ?
                            <Link onClick={logOut} to="/home" style={{ cursor: "pointer" }} className="text-dark fs-5 text-decoration-none me-3">Sign out <i className="ms-1 fas fa-sign-out-alt"></i></Link>
                            :
                            <Link to="/login" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-5 text-decoration-none">Sign up</Link>
                        }

                        {
                            user.email ? <span className="text-primary fs-5">{(user.displayName || user.name) || user.email}</span> : ""
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;