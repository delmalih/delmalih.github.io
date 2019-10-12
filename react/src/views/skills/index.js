// React
import React from 'react';

// Style
import {
    BackgroundDiv,
    Container,
    Title,
    TextDivider,
    Content,
    Col,
    Logo,
} from './style';

const Skills = () => (
    <BackgroundDiv id="Skills">
        <Container>
            <Title>Skills</Title>
            <TextDivider>DATA SCIENCE</TextDivider>
            <Content>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/python.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/numpy.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/scipy.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/opencv.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/scikit.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/tensorflow.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/pytorch.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/keras.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/hadoop.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/spark.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/dialogflow.png' /></Col>
            </Content>
            <TextDivider>WEB/MOBILE DEVELOPMENT</TextDivider>
            <Content>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/html.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/css.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/js.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/reactjs.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/node.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/php.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/flask.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/elasticsearch.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/firebase.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/mysql.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/mongodb.png' /></Col>
            </Content>
            <TextDivider>PROJECT MANAGEMENT</TextDivider>
            <Content>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/github.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/docker.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/gcp.png' /></Col>
                <Col lg={2} md={3} sm={3}><Logo src='images/skills/aws.png' /></Col>
            </Content>
        </Container>
    </BackgroundDiv>
);

export default Skills;