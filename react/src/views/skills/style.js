// React requirement
import { styled } from 'styletron-react';
import { Container as Cont } from 'reactstrap';

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
  fontSize: '60px',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alinItems: 'center',
  justifyContent: 'center',
}));