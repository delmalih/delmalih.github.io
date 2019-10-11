// React requirement
import { styled } from 'styletron-react';
import { Container as Cont } from 'reactstrap';

export const BackgroundDiv = styled('div', () => ({
  backgroundColor: '#E0E1E1',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
}));

export const Container = styled(Cont, () => ({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  color: '#222',
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

export const ContentDiv = styled('div', () => ({
  padding: '20px',
  fontSize: '20px',
  color: '#222',
  backgroundColor: 'white',
  borderRadius: '3px',
  boxShadow: '0px 0px 100px -25px rgba(0, 0, 0, 0.75)',
  '-webkit-box-shadow': '0px 0px 100px -25px rgba(0, 0, 0, 0.75)',
  '-moz-box-shadow': '0px 0px 100px -25px rgba(0, 0, 0, 0.75)',
}));

export const Item = styled('div', () => ({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const ItemIcon = styled('div', () => ({
  display: 'flex',
  flex: '0.1',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ItemContent = styled('div', () => ({
  display: 'flex',
  flex: '0.9',
}));

export const Lang = styled('div', () => ({
  marginLeft: '30px',
  marginTop: '20px',
}));

export const LangTitle = styled('span', () => ({
  fontSize: '18px',
}));