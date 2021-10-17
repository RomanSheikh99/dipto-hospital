import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const NavBar = () => {
    return (
        <div className='sticky-top bg-white'>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <Link to="/home">
                            <img src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link>
                                <NavLink
                                    to="/home"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/services"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Services
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/doctors"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Doctors
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/about"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/contact"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Button
                                style={{ background: 'none', outline: 'none' }}
                                className="text-black border-0">
                                <Link
                                    style={{ color: '#000', textDecoration: "none" }}
                                    to='/logIn'>
                                    Log In
                                </Link>
                            </Button>
                            <Button
                                style={{ background: '#12C1AD', outline: 'none' }}
                                className="rounded-pill border-0">
                                <Link
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    to='/register'>
                                    Register
                                </Link>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;