// React requirement
import { styled } from 'styletron-react';
import {
    Toast as T,
    ToastBody as TBody,
} from 'reactstrap';

export const Toast = styled(T, () => ({
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
    borderRadius: '15px',
}));

export const ToastImgContainer = styled('div', () => ({
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
}));

export const ToastImg = styled('img', () => ({
    maxHeight: '100%',
    width: 'auto',
}));

export const ToastHeader = styled('div', () => ({
    fontSize: '18px',
    color: '#222',
    textAlign: 'center',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    fontWeight: 'bold',
    borderTop: '1px solid #222',
}));

export const ToastBody = styled(TBody, () => ({
    color: '#222',
}));

export const ToastFooter = styled('div', () => ({
    color: '#222',
    fontWeight: 'none',
    background: 'white',
    padding: '12px',
}));