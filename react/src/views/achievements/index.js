// React
import React from 'react';
import Fade from 'react-reveal/Fade';

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
            <Fade>
                <Title>Achievements</Title>
                <ToastRow>
                {
                    achievements.map((achievement, key) => (
                        <ToastCol lg={3} md={4} sm={6} xs={12} key={key}>
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
            </Fade>
        </Container>
    </BackgroundDiv>
);

export default Achievements;