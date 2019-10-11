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

export const Blockquote = styled('div', () => ({
  color: '#E0E1E1',
  fontSize: '30px',
  textAlign: 'center',
}));

export const Name = styled('div', () => ({
  width: '80%',
  display: 'flex',
  alignSelf: 'center',
  fontSize: '28px',
  justifyContent: 'flex-end',
}));