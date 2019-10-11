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
    ContentDiv,
    Title,
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
                        <ItemContent>Paris, FR</ItemContent>
                    </Item>
                    <Item>
                        <ItemIcon><Fa name='envelope-o' /></ItemIcon>
                        <ItemContent>da.elmalih@gmail.com</ItemContent>
                    </Item>
                    <Item>
                        <ItemIcon><Fa name='phone' /></ItemIcon>
                        <ItemContent>(+33) 06 50 12 98 56</ItemContent>
                    </Item>
                    <hr />
                    <Item>
                        <ItemIcon><Fa name='globe' /></ItemIcon>
                        <ItemContent><b>{lang.languageTitle}</b></ItemContent>
                    </Item>
                    <Lang>
                        <LangTitle><b>{lang.lang1.name}</b> - {lang.lang1.level}</LangTitle>
                        <Progress color="info" value="100" />
                    </Lang>
                    <Lang>
                        <LangTitle><b>{lang.lang2.name}</b> - {lang.lang2.level}</LangTitle>
                        <Progress color="info" value="95" />
                    </Lang>
                    <Lang>
                        <LangTitle><b>{lang.lang3.name}</b> - {lang.lang3.level}</LangTitle>
                        <Progress color="info" value="75" />
                    </Lang>
                    <Lang>
                        <LangTitle><b>{lang.lang4.name}</b> - {lang.lang4.level}</LangTitle>
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