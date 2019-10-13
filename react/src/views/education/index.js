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
} from './style';

const Education = () => (
    <BackgroundDiv id="Education">
        <Container>
            <Title>Education</Title>
            <ListEvents events={events} />
        </Container>
    </BackgroundDiv>
);

export default Education;