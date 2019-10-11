// React requirement
import { styled } from 'styletron-react';
import { Form as F, Container as Cont } from 'reactstrap';

export const BackgroundDiv = styled('div', () => ({
  minHeight: '100vh',
  backgroundColor: '#E0E1E1',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Container = styled(Cont, () => ({
  // marginTop: '40px',
  height: '100%',
  color: '#222',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
}));

export const Title = styled('div', () => ({
  padding: '50px',
  fontSize: '60px',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alinItems: 'center',
  justifyContent: 'center',
}));

export const Form = styled(F, () => ({
  width: '80%',
  backgroundColor: 'white',
  padding: '50px',
  borderRadius: '3px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0px 0px 100px -25px rgba(0, 0, 0, 0.75)',
  '-webkit-box-shadow': '0px 0px 100px -25px rgba(0, 0, 0, 0.75)',
  '-moz-box-shadow': '0px 0px 100px -25px rgba(0, 0, 0, 0.75)',
}));

export const ButtonDiv = styled('div', () => ({
  width: '60%',
  marginLeft: '20%',
}));