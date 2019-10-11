// React
import React from 'react';
import PropTypes from 'prop-types';

// Style
import {
  BackgroundDiv,
  Container,
  Title
} from './style';

const Achievements = () => {
  return (
    <BackgroundDiv id="Achievements">
      <Container>
        <Title>Achievements</Title>
      </Container>
    </BackgroundDiv>
  );
}

Achievements.propTypes = {
  lang: PropTypes.node,
}

export default Achievements;