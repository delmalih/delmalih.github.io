// React requirement
import React from 'react';
import Fa from 'react-fontawesome';

// Style
import {
    Navbar,
    Container,
    NavItem,
    NavbarPlaceholder,
} from './style';

const scrollFunc = elm_id => {
    const elm = document.getElementById(elm_id);
    window.scroll({
        top: elm.offsetTop,
        left: 0,
        behavior: 'smooth',
    });
}

const NavBar = () => (
    <div>
        <Navbar>
            <Container>
                <NavItem id='MenuHome' onClick={() => scrollFunc('Home')}>
                    <Fa name='home' />
                    <span style={{ marginLeft: '5px' }} className='hideMobile'>Home</span>
                </NavItem>
                <NavItem id='MenuWorkingExp' onClick={() => scrollFunc('WorkingExp')}>
                    <Fa name='briefcase' />
                    <span style={{ marginLeft: '5px' }} className='hideMobile'>Experience</span>
                </NavItem>
                <NavItem id='MenuSkills' onClick={() => scrollFunc('Skills')}>
                    <Fa name='star' />
                    <span style={{ marginLeft: '5px' }} className='hideMobile'>Skills</span>
                </NavItem>
                <NavItem id='MenuEducation' onClick={() => scrollFunc('Education')}>
                    <Fa name='graduation-cap' />
                    <span style={{ marginLeft: '5px' }} className='hideMobile'>Education</span>
                </NavItem>
                <NavItem id='MenuAchievements' onClick={() => scrollFunc('Achievements')}>
                    <Fa name='trophy' />
                    <span style={{ marginLeft: '5px' }} className='hideMobile'>Achievements</span>
                </NavItem>
            </Container>
        </Navbar>
        <NavbarPlaceholder />
    </div>
);

export default NavBar;