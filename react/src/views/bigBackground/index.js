// React
import React from 'react';

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
    DownButton,
    RotateFa,
} from './style';

const scrollFunc = () => {
    const elm = document.getElementById('WorkingExp');
    window.scrollTo({
        top: elm.offsetTop - 60,
        left: 0,
        behavior: 'smooth',
    });
}

const BigBackground = () => (
    <BackgroundDiv id="Home">
        <CenterDiv>
            <LogoDiv>
                <Logo src='images/profilepic_croped.png' alt='david elmalih logo' />
            </LogoDiv>
            <Name>David EL MALIH</Name>
            <SubName>Data scientist</SubName>
            <SubName>MSc in Artificial Intelligence Student @ CentraleSupelec</SubName>
            <Icons>
                <Fa name='linkedin' onClick={() => window.open("https://www.linkedin.com/in/elmalihd/", "_blank")} />
                <Fa name='github' onClick={() => window.open("https://github.com/delmalih", "_blank")} />
            </Icons>
            <DownButton onClick={scrollFunc}>
                <RotateFa name="chevron-right" />
            </DownButton>
        </CenterDiv>
    </BackgroundDiv>
);

export default BigBackground;