// React requirement
import { styled } from 'styletron-react';
import { Container as Cont } from 'reactstrap';

export const BackgroundDiv = styled('div', () => ({
  height: '40px',
  backgroundColor: '#222',
  backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .57), #222), url(images/background.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '0px 0px, 38% 56%',
  borderTop: '2px solid #222',
}));

export const Container = styled(Cont, () => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

export const Content = styled('div', () => ({
  color: '#E0E1E1',
  textAlign: 'right',
}));