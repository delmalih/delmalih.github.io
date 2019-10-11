// React
import React from 'react';
import PropTypes from 'prop-types';

// Langs
import Lang_en from './langs/en';
import Lang_fr from './langs/fr';

// Style
import {
  BackgroundDiv,
  Container,
  Content,
} from './style';

const Footer = props => {
  const lang = props.lang === 'fr' ? Lang_fr : Lang_en;
  return (
    <BackgroundDiv id="Footer">
      <Container>
        <Content>{lang.content}</Content>
      </Container>
    </BackgroundDiv>
  );
}

Footer.propTypes = {
  lang: PropTypes.node,
}

export default Footer;