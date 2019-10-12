// React
import React from 'react';
import Fade from 'react-reveal/Fade';

// Local
import ListEvents from "./components/listEvents.component";
import events from "./events";

// Style
import {
    BackgroundDiv,
    Container,
    Title,
    ContentDiv,
} from './style';

const Education = () => (
    <BackgroundDiv id="Education">
        <Container>
            <Fade>
                <Title>Education</Title>
                <ContentDiv>
                    <ListEvents events={events} />
                </ContentDiv>
            </Fade>
        </Container>
    </BackgroundDiv>
);

export default Education;