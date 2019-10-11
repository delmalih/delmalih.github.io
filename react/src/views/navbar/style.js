// React requirement
import { styled } from 'styletron-react';

export const Navbar = styled('div', () => ({
  position: 'fixed',
  height: '60px',
  width: '100%',
  backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .57), #222), url(https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/others%2Fbackground.jpg?alt=media&token=5812b590-0eda-4e2f-9ea0-33aabdde7499)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '0px 0px, 38% 50%',
  '-moz-box-shadow': '0px 2px 5px 0px #343434',
  '-webkit-box-shadow': '0px 2px 5px 0px #343434',
  '-o-box-shadow': '0px 2px 5px 0px #343434',
  'box-shadow': '0px 2px 5px 0px #343434',
  zIndex: '1000',
}));

export const Container = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  width: '80%',
  height: '100%',
  marginLeft: '10%',
}));

export const Right = styled('div', () => ({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  justifyContent: 'flex-end',
}));

export const Items = styled('div', () => ({
  display: 'flex',
  marginRight: '30px',
}));

export const NavItem = styled('div', () => ({
  color: '#E0E1E1',
  fontSize: '25px',
  cursor: 'pointer',
  padding: '20px',
  ':hover': {
    color: 'rgba(224, 225, 225, 0.5)',
    '-moz-transition': 'all 0.25s ease-in',
    '-webkit-transition': 'all 0.25s ease-in',
    '-o-transition': 'all 0.25s ease-in',
    transition: 'all 0.25s ease-in',
  },
}));

export const Flags = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const Flag = styled('img', () => ({
  cursor: 'pointer',
  width: '30px',
  height: 'auto',
  margin: '5px',
}))