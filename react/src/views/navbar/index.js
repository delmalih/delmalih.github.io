// React requirement
import React from 'react';
import Fa from 'react-fontawesome';

// Style
import {
    Navbar,
    Container,
    Right,
    NavItem,
} from './style';

const scrollFunc = elm_id => {
    const elm = document.getElementById(elm_id);
    window.scroll({
        top: elm.offsetTop - 60,
        left: 0,
        behavior: 'smooth',
    });
}

const NavBar = () => (
    <Navbar id='Navbar'>
        <Container>
            <Right>
                <NavItem onClick={() => scrollFunc('Home')}>
                <Fa name='home' />
                </NavItem>
                <NavItem onClick={() => scrollFunc('Bio')}>
                <Fa name='file-text-o' />
                </NavItem>
                <NavItem onClick={() => scrollFunc('Contact')}>
                <Fa name='envelope-o' />
                </NavItem>
            </Right>
        </Container>
    </Navbar>
);

NavBar.propTypes = {}

export default NavBar;