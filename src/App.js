import React from 'react';
import logo from './logo.svg';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="navbar">
          <NavBar bg="light" expand="lg">
            <Nav className="mr-auto">
              <Nav.Link href="#me">Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <NavDropdown title="Projects" id="nav-dropdown">
                <NavDropdown.Item href="#projects/ecommerce">Ecommerce Project</NavDropdown.Item>
                <NavDropdown.Item href="#projects/ramp">PTP File Sharing App</NavDropdown.Item>
                <NavDropdown.Item href="#projects/neuralNet">Neural Network</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </NavBar>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          NavBar<br/>header with image<br/>education<br/>skills<br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
