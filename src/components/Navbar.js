import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap';
import logo from '../imgs/logo.png'


function Header(props) {
  return (
    <div>
      <Navbar expand="xxl" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#lvp">LVP</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;