import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
// import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <p style={{ maxWidth: '12rem', maxHeight: '2rem' }}> Image Gallery </p>
      </Container>
    </Navbar>
  );
};

export default Header;
