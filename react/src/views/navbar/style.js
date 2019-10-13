// React requirement
import { styled } from 'styletron-react';

export const Navbar = styled('div', () => ({
  position: 'fixed',
  bottom: '0',
  height: '60px',
  width: '100%',
  backgroundColor: '#222',
  zIndex: '1000',
  boxShadow: '0px -5px 40px 0px rgba(0,0,0,0.75)',
  '-webkit-box-shadow': '0px -5px 40px 0px rgba(0,0,0,0.75)',
  '-moz-box-shadow': '0px -5px 40px 0px rgba(0,0,0,0.75)',
}));

export const NavbarPlaceholder = styled('div', () => ({
  height: '60px',
  width: '100%',
}));

export const Container = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}));

export const NavItem = styled('div', () => ({
  color: '#E0E1E1',
  fontSize: '20px',
  cursor: 'pointer',
  flexGrow: '1',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  ':hover': {
    backgroundColor: 'rgba(224, 225, 225, 0.1)',
    '-moz-transition': 'all 0.25s ease-in',
    '-webkit-transition': 'all 0.25s ease-in',
    '-o-transition': 'all 0.25s ease-in',
    transition: 'all 0.25s ease-in',
  },
}));