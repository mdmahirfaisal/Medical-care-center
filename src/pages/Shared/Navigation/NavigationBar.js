import { Container, Nav, Navbar } from "react-bootstrap";
import Bounce from 'react-reveal/Bounce';

import { HashLink } from 'react-router-hash-link';

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const NavigationBar = () => {
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
            className={isSticky || isCollapsed ? "shadow-sm bg-light py-2 nav-container" : "py-4"} >
            <Container className="container" fluid>
                <Navbar.Brand as={HashLink} to="/" className="text-danger fw-bold"><Bounce bottom cascade duration={2000}>Medical care </Bounce></Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                    <Nav
                        className="me-auto ms-3"
                        style={{ maxHeight: '110px' }}
                        navbarScroll
                    >
                        <Nav.Link className=" text-dark fs-6" as={HashLink} to="/home" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                        <Nav.Link className=" text-dark fs-6" as={HashLink} to="/home" active>Foods</Nav.Link>
                        <Nav.Link className=" text-dark fs-6" as={HashLink} to="/home" active>About</Nav.Link>
                    </Nav>
                    <Nav className="d-sm-flex align-items-center">
                        <p className=" text-dark fs-5 me-3" as={HashLink} to="/home"><i className="fas fa-cart-plus "></i></p>


                        <p onClick="" className="text-dark fs-5 text-decoration-none me-3"><i className="fas fa-sign-out-alt"></i></p>

                        <p as={Link} to="/login" className="text-dark fs-5 text-decoration-none">Sign up</p>

                    </Nav>
                    <Navbar.Text className="ms-2 ">
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;