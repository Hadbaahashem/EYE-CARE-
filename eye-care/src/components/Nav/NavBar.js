import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import './NavBar.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const isAuthenticated = !!sessionStorage.getItem('User');
  const user = JSON.parse(sessionStorage.getItem('User'));
  const userName = user ? user.name : '';

  return (
    <Row>
      <Navbar bg="blue" expand="lg">
        <Container>
          <Navbar.Brand href="/">Eye Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/doctors">Doctors</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              {isAuthenticated && (
                <>
                  <Nav.Link>{`Welcome, ${userName}`}</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              )}
              {!isAuthenticated && (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
