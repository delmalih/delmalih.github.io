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
    Title,
    ContentDiv,
} from './style';

const WorkingExp = props => {
    // const lang = props.lang === 'fr' ? Lang_fr : Lang_en;
    return (
        <BackgroundDiv id="WorkingExp">
            <Container>
                <Title>Experience</Title>
                <ContentDiv>
                </ContentDiv>
            </Container>
        </BackgroundDiv>
    );
}

WorkingExp.propTypes = {
  lang: PropTypes.node,
}

export default WorkingExp;