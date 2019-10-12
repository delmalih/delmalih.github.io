// React
import React from 'react';

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
            <Title>Education</Title>
            <ContentDiv>
                <ListEvents events={events} />
            </ContentDiv>
        </Container>
    </BackgroundDiv>
);

export default Education;