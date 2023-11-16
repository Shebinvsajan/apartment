// Header.js

import React from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

export default function Header() {
  return (
    <div className='head'>
      <Navbar className="fixed-top bg-white" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="font-weight-bold logo-text">
              Square Frame
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-text">
              <Link  to="home" smooth={true} duration={500} offset={-70} className="nav-link">Home</Link>
              <Link to="about" smooth={true} duration={500} offset={-70} className="nav-link">About</Link>
              <Link to="project" smooth={true} duration={500} offset={-70} className="nav-link">Our Project</Link>
              <Link to="contact" smooth={true} duration={500} offset={-70} className="nav-link">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
