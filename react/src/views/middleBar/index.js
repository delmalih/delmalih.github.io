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
  Blockquote,
  Name,
} from './style';

const MiddleBar = props => {
  const lang = props.lang === 'fr' ? Lang_fr : Lang_en;
  return (
    <BackgroundDiv id="MiddleBar">
      <Container>
        <Blockquote>{lang.quote}</Blockquote>
        <Name><b>- {lang.name} -</b></Name>
      </Container>
    </BackgroundDiv>
  );
}

MiddleBar.propTypes = {
  lang: PropTypes.node,
}

export default MiddleBar;