// React requirement
import { styled } from 'styletron-react';
import { Row, Col as C } from 'reactstrap';

export const Title = styled('div', () => ({
  color: '#333',
  fontSize: '22px',
  marginBottom: '10px',
}));

export const Content = styled(Row, () => ({
  width: '100%',
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