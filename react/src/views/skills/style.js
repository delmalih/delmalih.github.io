// React requirement
import { styled } from 'styletron-react';
import { Container as Cont, Row, Col as C } from 'reactstrap';

export const BackgroundDiv = styled('div', () => ({
  minHeight: '40vh',
  backgroundColor: '#222',
}));

export const Container = styled(Cont, () => ({
  minHeight: '40vh',
  color: '#E0E1E1',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
}));

export const Title = styled('div', () => ({
  padding: '20px',
  fontSize: '45px',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alinItems: 'center',
  justifyContent: 'center',
}));

export const TextDivider = styled('h4', () => ({
  alignItems: 'center',
  display: 'flex',
  textAlign: 'center',
  width: '100%',
  '::after': {
    borderTop: '.0625em solid',
    content: '""',
    flex: '1',
    margin: '0 .5em',    
  },
  '::before': {
    borderTop: '.0625em solid',
    content: '""',
    flex: '1',
    margin: '0 .5em',    
  }
}));

export const Content = styled(Row, () => ({
  width: '95%',
  padding: '10px',
  marginTop: '10px',
  marginBottom: '20px',
  backgroundColor: 'rgba(224, 225, 225, 1)',
  borderRadius: '10px',
  border: '2px solid',
}));

export const Col = styled(C, () => ({
  display: 'flex',
  padding: '10px',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Logo = styled('img', () => ({
  width: '100px',
  height: 'auto',
}));