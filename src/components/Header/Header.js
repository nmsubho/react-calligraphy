import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header fixed-top bg-white">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to="/">Caligraphy</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-decoration-none nav-link" to="/home">Home</Link>
                            <Link className="text-decoration-none nav-link" to="/services">Services</Link>
                            <Link className="text-decoration-none nav-link" to="/gallary">Galary</Link>
                        </Nav>
                        <Nav>
                            <Link className="text-decoration-none nav-link" to="/about">About</Link >
                            <Link className="text-decoration-none nav-link" to="/news">News</Link >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; <h1>Header</h1>