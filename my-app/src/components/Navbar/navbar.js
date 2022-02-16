import React from 'react';
// import './style.css';
// import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBarss() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Netflix</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/FavList'>Favourite</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarss;
