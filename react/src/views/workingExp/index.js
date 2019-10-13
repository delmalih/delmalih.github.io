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

const WorkingExp = () => (
    <BackgroundDiv id="WorkingExp">
        <Container fluid>
            <Title>Experience</Title>
            <ListEvents events={events} />
        </Container>
    </BackgroundDiv>
);

export default WorkingExp;