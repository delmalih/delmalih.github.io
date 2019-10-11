// React requirement
import React from 'react';
import Fa from 'react-fontawesome';
import PropTypes from 'prop-types';

// Style
import {
  Navbar,
  Container,
  Right,
  NavItem,
  Flags,
  Flag,
} from './style';

const scrollFunc = elm_id => {
  const elm = document.getElementById(elm_id);
  window.scroll({
    top: elm.offsetTop - 60,
    left: 0,
    behavior: 'smooth',
  });
}

const NavBar = props => (
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
        <Flags>
          <Flag src='images/en.png' alt='en' onClick={() => props.changeLang('en')} />
          <Flag src='images/fr.png' alt='fr' onClick={() => props.changeLang('fr')} />
        </Flags>
      </Right>
    </Container>
  </Navbar>
);

NavBar.propTypes = {
  changeLang: PropTypes.func,
}

export default NavBar;