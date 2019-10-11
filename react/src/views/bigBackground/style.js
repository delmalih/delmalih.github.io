// React requirement
import { styled } from 'styletron-react';
import { Container } from 'reactstrap';
import FA from 'react-fontawesome';

export const BackgroundDiv = styled('div', () => ({
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .57), #222), url(https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/others%2Fbackground.jpg?alt=media&token=5812b590-0eda-4e2f-9ea0-33aabdde7499)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '0px 0px, 38% 50%',
}));

export const Flags = styled('div', () => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

export const Flag = styled('img', () => ({
  width: '30px',
  margin: '5px',
  cursor: 'pointer',
}));

export const CenterDiv = styled(Container, () => ({
  display: 'flex',
  minHeight: '100vh',
  flex: '1',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#E0E1E1',
}));

export const LogoDiv = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '220px',
  height: '220px',
  overflow: 'hidden',
  borderRadius: '110px',
  border: '5px solid #FFF',
  backgroundColor: '#D9D9D9',
  marginBottom: '15px',
}));

export const Logo = styled('img', () => ({
  width: '95%',
  height: 'auto',
}));

export const Name = styled('div', () => ({
  fontSize: '40px',
  textAlign: 'center',
}));

export const SubName = styled('div', () => ({
  fontSize: '25px',
  textAlign: 'center',
}));

export const Icons = styled('div', () => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '15px',
  marginBottom: '30px',
}));

export const Fa = styled(FA, () => ({
  fontSize: '20px',
  width: '50px',
  height: '50px',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '15px',
  border: '1px solid #E0E1E1',
  borderRadius: '50%',
  marginLeft: '5px',
  marginRight: '5px',
  ':hover': {
    backgroundColor: '#E0E1E1',
    color: "#222",
    '-moz-transition': 'all 0.25s ease-in',
    '-webkit-transition': 'all 0.25s ease-in',
    '-o-transition': 'all 0.25s ease-in',
    transition: 'all 0.25s ease-in',
  },
}));

export const DownButton = styled('div', () => ({
  fontSize: '12px',
  width: '25px',
  height: '25px',
  cursor: 'pointer',
  backgroundColor: '#E0E1E1',
  borderRadius: '2px',
  transform: 'rotate(45deg)',
  color: '#222',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '15px',
  ':hover': {
    backgroundColor: 'rgba(224, 225, 225, 0.5)',
    '-moz-transition': 'all 0.25s ease-in',
    '-webkit-transition': 'all 0.25s ease-in',
    '-o-transition': 'all 0.25s ease-in',
    transition: 'all 0.25s ease-in',
  },
}));

export const RotateFa = styled(FA, () => ({
  transform: 'rotate(45deg)',
}));