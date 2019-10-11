// React requirement
import { styled } from 'styletron-react';
import { Container as Cont, Col as C, Row as R, Button, Nav } from 'reactstrap';

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

export const Row = styled(R, () => ({
  diplay: 'flex',
  flex: '1',
}));

export const Col = styled(C, () => ({
  paddingTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
}));

export const ProfileImg = styled('img', () => ({
  width: '100%',
  height: 'auto',
}));

export const Content = styled(R, () => ({
  margin: '0',
  padding: '0',
}));

export const ContentCol = styled(C, () => ({
  margin: '0',
  padding: '0',
}));

export const Menu = styled(Nav, () => ({
  width: '100%',
  padding: '0',
  margin: '0',
}));

export const MenuItem = styled(Button, props => ({
  borderRadius: '5px',
  cursor: 'pointer',
  width: '100%',
  boxShadow: props.active ? '0px 0px 100px -25px rgba(0, 0, 0, 0.75)' : '',
  '-webkit-box-shadow': props.active ? '0px 0px 100px -25px rgba(0, 0, 0, 0.75)' : '',
  '-moz-box-shadow': props.active ? '0px 0px 100px -25px rgba(0, 0, 0, 0.75)' : '',
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