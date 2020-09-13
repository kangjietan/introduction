import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Component variables
const transitionSpeed = '600ms';
const textPrimary = '#b6b6b6';
const textSecondary = '#ececec';
const bgPrimary = '#23232e';
const bgSecondary = '#141418';

// .navbar
const NavigationBar = styled.nav`
  position: fixed;
  background-color: ${bgPrimary};
  transition: width 200ms ease;

  @media only screen and (min-width: 600px) {
    ${NavigationBar} {
      top: 0;
      width: 5rem;
      height: 100vh;
    }
  
    ${NavigationBar}:hover {
      width: 16rem;
    }
  }
`;

// .navbar-nav
const NavigationBarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

// .logo
const Logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: ${textSecondary};
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  width: 100%;
`;

// .nav-link
const NavigationLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${textPrimary};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: ${transitionSpeed};
`;

// .link-text
const LinkText = styled.span`
  display: none;
  margin-left: 1rem;
`;

function Navbar(props) {
  return (
    <NavigationBar>
      <NavigationBarNav>
        <Logo>
          <NavigationLink>
            <LinkText>Fireship</LinkText>
          </NavigationLink>
        </Logo>
      </NavigationBarNav>
    </NavigationBar>
  );
}

export default Navbar;
