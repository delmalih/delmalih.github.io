// React
import React from 'react';

// Local
import Achievement from './components/achievement.component';

// Data
import achievements from './achievements';

// Style
import {
    BackgroundDiv,
    Container,
    Title,
    ToastRow,
    ToastCol,
} from './style';

const Achievements = () => (
    <BackgroundDiv id="Achievements">
        <Container>
            <Title>Achievements & Projects</Title>
            <ToastRow>
            {
                achievements.map((achievement, key) => (
                    <ToastCol md={4} sm={6} xs={12} key={key}>
                        <Achievement
                            title={achievement.title}
                            imageSrc={achievement.imageSrc}
                            content={achievement.content}
                            results={achievement.results}
                        />
                    </ToastCol>
                ))
            }
            </ToastRow>
        </Container>
    </BackgroundDiv>
);

export default Achievements;