// React requirement
import { styled } from 'styletron-react';

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