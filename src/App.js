import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button }from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';

class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><img src="logo"/>React-Bootstrap</Navbar.Brand>
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

export default App;
