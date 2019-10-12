// React requirement
import { styled } from 'styletron-react';

export const Sidebar = styled('div', () => ({
    position: 'fixed',
    zIndex: 1000,
    left: '90%',
    top: '10vh',
    height: '80vh',
}));

export const ProgressContainer = styled('div', () => ({
    width: '8px',
    height: '100%',
    background: '#ccc',
}));

export const ProgressBar = styled('div', () => ({
    width: '8px',
    height: '0',
    background: '#17a2b8',
}));

export const Badge = styled('div', () => ({
    position: 'fixed',
    zIndex: 1100,
    top: '0',
    left: '92%',
    width: 0.07 * document.body.offsetWidth + 'px',
    wordWrap: 'break-word',
    borderRadius: '20px',
    background: '#222',
    fontSize: '12px',
    textAlign: 'center',
    padding: '2px 5px 2px 5px',
    color: 'white',
    cursor: 'pointer',
}));