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
        <Container>
            <Title>Experience</Title>
            <ContentDiv>
                <ListEvents events={events} />
            </ContentDiv>
        </Container>
    </BackgroundDiv>
);

export default WorkingExp;