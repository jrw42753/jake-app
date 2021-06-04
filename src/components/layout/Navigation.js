import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
            <Navbar.Brand href="/" ><img src="https://firebasestorage.googleapis.com/v0/b/jakewiesenthal.appspot.com/o/coollogo_com-27380159.png?alt=media&token=556928b8-38d4-4bbb-99c0-81cc17b0beef" alt="Jake Logo" width="60" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation