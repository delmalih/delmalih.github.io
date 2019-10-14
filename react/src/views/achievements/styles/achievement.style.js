// React requirement
import { styled } from 'styletron-react';
import {
    Toast as T,
    ToastHeader as THeader,
    ToastBody as TBody,
} from 'reactstrap';

export const Toast = styled(T, () => ({
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
    ':hover': {
        // boxShadow: '0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)',
        // '-webkit-box-shadow': '0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)',
        // '-moz-box-shadow': '0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)',
    },
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

export const ToastFooter = styled(THeader, () => ({
    color: '#222',
}));