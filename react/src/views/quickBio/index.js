// React
import React from 'react';
import PropTypes from 'prop-types';
import Fa from 'react-fontawesome';
import { Progress } from 'reactstrap';

// Langs
import Lang_en from './langs/en';
import Lang_fr from './langs/fr';

// Style
import {
    BackgroundDiv,
    Container,
    Title,
    ContentDiv,
    Item,
    ItemIcon,
    ItemContent,
    Lang,
    LangTitle,
} from './style';

const QuickBio = props => {
    const lang = props.lang === 'fr' ? Lang_fr : Lang_en;
    return (
        <BackgroundDiv id="QuickBio">
            <Container>
                <Title>{lang.title}</Title>
                <ContentDiv>
                    <Item>
                        <ItemIcon><Fa name='map-marker' /></ItemIcon>
                        <ItemContent>{lang.location}</ItemContent>
                    </Item>
                    <Item>
                        <ItemIcon><Fa name='envelope-o' /></ItemIcon>
                        <ItemContent>{lang.mail}</ItemContent>
                    </Item>
                    <Item>
                        <ItemIcon><Fa name='phone' /></ItemIcon>
                        <ItemContent>{lang.phone}</ItemContent>
                    </Item>
                    <hr />
                    <Item>
                        <ItemIcon><Fa name='globe' /></ItemIcon>
                        <ItemContent><b>{lang.languageTitle}</b></ItemContent>
                    </Item>
                    <Lang>
                        <LangTitle>{lang.fr}</LangTitle>
                        <Progress color="info" value="100" />
                    </Lang>
                    <Lang>
                        <LangTitle>{lang.en}</LangTitle>
                        <Progress color="info" value="95" />
                    </Lang>
                    <Lang>
                        <LangTitle>{lang.is}</LangTitle>
                        <Progress color="info" value="75" />
                    </Lang>
                    <Lang>
                        <LangTitle>{lang.ar}</LangTitle>
                        <Progress color="info" value="45" />
                    </Lang>
                </ContentDiv>
            </Container>
        </BackgroundDiv>
    );
}

QuickBio.propTypes = {
  lang: PropTypes.node,
}

export default QuickBio;