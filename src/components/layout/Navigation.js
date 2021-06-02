import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="justify-content-center custom-navbar">
            <Navbar.Brand href="#home" >Jake's Portfolio</Navbar.Brand>
        </Navbar>
    )
}

export default Navigation