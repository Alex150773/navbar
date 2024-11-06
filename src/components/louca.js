import React from 'react';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  background-color: red ;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Logo = styled.h1`
color: black;
font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.10s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;