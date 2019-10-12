// React
import React from 'react';
import Fa from 'react-fontawesome';
import { Progress } from 'reactstrap';
import Fade from 'react-reveal/Fade';

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

const QuickBio = () => (
    <BackgroundDiv id="QuickBio">
        <Container>
            <Fade>
                <Title>Personnal informations</Title>
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
                        <ItemContent><b>Languages</b></ItemContent>
                    </Item>
                    <Lang>
                        <LangTitle><b>French</b> - Native</LangTitle>
                        <Progress color="info" value="100" />
                    </Lang>
                    <Lang>
                        <LangTitle><b>English</b> - Full professional proficiency</LangTitle>
                        <Progress color="info" value="95" />
                    </Lang>
                    <Lang>
                        <LangTitle><b>Hebrew</b> - High working proficiency</LangTitle>
                        <Progress color="info" value="75" />
                    </Lang>
                    <Lang>
                        <LangTitle><b>Arabic</b> - Elementary proficiency</LangTitle>
                        <Progress color="info" value="45" />
                    </Lang>
                </ContentDiv>
            </Fade>
        </Container>
    </BackgroundDiv>
);

export default QuickBio;