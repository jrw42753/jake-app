import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
            <Navbar.Brand href="/" ><img src="https://firebasestorage.googleapis.com/v0/b/jakewiesenthal.appspot.com/o/coollogo_com-27380159.png?alt=media&token=556928b8-38d4-4bbb-99c0-81cc17b0beef" alt="Jake Logo" width="60" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/education">Education</Nav.Link>
                <Nav.Link >About</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation