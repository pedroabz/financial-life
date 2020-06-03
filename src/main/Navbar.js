import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'

export default function(){
    return(
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="About">About</Navbar.Brand>
                <Navbar.Brand href="Form">Form</Navbar.Brand>
                <Navbar.Brand href="Report">Reports</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                
                </Navbar.Collapse>
        </Navbar>
    )
}