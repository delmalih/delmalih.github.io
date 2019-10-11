// React requirement
import { styled } from 'styletron-react';
import { Media as M } from 'reactstrap';

export const Period = styled('div', () => ({
  color: "#17A2B8",
  fontSize: '18px',
}));

export const Description = styled('div', () => ({
  marginTop: '5px',
  fontSize: '18px',
  color: "#222",
}));

export const Media = styled(M, props => ({
  width: props.object ? '100px' : 'auto',
  height: props.object ? '100px' : 'auto',
  fontSize: props.heading ? '20px' : '18px',
  marginLeft: props.heading ? '10px' : '0',
}));
