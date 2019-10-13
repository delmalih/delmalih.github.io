// React
import React from 'react';
import FA from 'react-fontawesome';

// Local
import resumePDF from './resume.pdf';

// Style
import {
    BackgroundDiv,
    CenterDiv,
    LogoDiv,
    Logo,
    Name,
    SubName,
    Icons,
    Fa,
    InfoRow,
    InfoCol,
} from './style';

const BigBackground = () => (
    <BackgroundDiv id="Home">
        <CenterDiv>
            <LogoDiv>
                <Logo src='images/profilepic_croped.png' alt='david elmalih logo' />
            </LogoDiv>
            <Name>David EL MALIH</Name>
            <SubName>Data scientist</SubName>
            <SubName>MSc in Artificial Intelligence Student @ CentraleSupelec</SubName>
            <InfoRow>
                <InfoCol lg={4} md={4} sm={12}>
                    <FA name='at' />{' '}
                    da.elmalih@gmail.com
                </InfoCol>
                <InfoCol lg={4} md={4} sm={12}>
                    <FA name='phone' />{' '}
                    (+33) 06.50.12.98.56
                </InfoCol>
                <InfoCol last lg={4} md={4} sm={12}>
                    <FA name='map-marker' />{' '}
                    Paris, FR
                </InfoCol>
            </InfoRow>
            <Icons>
                <Fa name='linkedin' onClick={() => window.open("https://www.linkedin.com/in/elmalihd/", "_blank")} />
                <Fa name='github' onClick={() => window.open("https://github.com/delmalih", "_blank")} />
                <Fa name='file' onClick={() => window.open(resumePDF, "_blank")} />
            </Icons>
        </CenterDiv>
    </BackgroundDiv>
);

export default BigBackground;