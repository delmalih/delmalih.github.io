// React
import React from 'react';
import PropTypes from 'prop-types';

// Langs
// import Lang_en from './langs/en';
// import Lang_fr from './langs/fr';

// Style
import {
  BackgroundDiv,
  Container,
  Title
} from './style';

const Skills = props => {
  // const lang = props.lang === 'fr' ? Lang_fr : Lang_en;
  return (
    <BackgroundDiv id="Skills">
      <Container>
        <Title>Skills</Title>
      </Container>
    </BackgroundDiv>
  );
}

Skills.propTypes = {
  lang: PropTypes.node,
}

export default Skills;