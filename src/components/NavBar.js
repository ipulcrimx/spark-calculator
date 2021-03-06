import React, { Component } from 'react';
import { Navbar, Nav}from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css';

class NavBar extends Component 
{
  render() 
  {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><img src={logo} alt="logo" className="Logo-Navbar"/>Spark Calculator v0.1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div>
      );
  }
}

export default NavBar;
