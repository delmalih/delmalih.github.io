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
            <NavItem onClick={() => scrollFunc('Home')}>
                <Fa name='home' />
            </NavItem>
            <Right>
                <NavItem onClick={() => scrollFunc('WorkingExp')}>
                    <Fa name='briefcase' />
                </NavItem>
                <NavItem onClick={() => scrollFunc('Skills')}>
                    <Fa name='star' />
                </NavItem>
                <NavItem onClick={() => scrollFunc('Education')}>
                    <Fa name='graduation-cap' />
                </NavItem>
                <NavItem onClick={() => scrollFunc('Achievements')}>
                    <Fa name='trophy' />
                </NavItem>
                <NavItem onClick={() => scrollFunc('QuickBio')}>
                    <Fa name='info-circle' />
                </NavItem>
            </Right>
        </Container>
    </Navbar>
);

NavBar.propTypes = {}

export default NavBar;