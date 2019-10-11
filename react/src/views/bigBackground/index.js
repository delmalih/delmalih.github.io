// React
import React from 'react';
import PropTypes from 'prop-types';

// Langs
import Lang_en from './langs/en';
import Lang_fr from './langs/fr';

// Style
import {
  BackgroundDiv,
  Flags,
  Flag,
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
  const elm = document.getElementById('QuickBio');
  window.scrollTo({
    top: elm.offsetTop - 60,
    left: 0,
    behavior: 'smooth',
  });
}

const BigBackground = props => {
  const lang = props.lang === 'fr' ? Lang_fr : Lang_en;
  return (
    <BackgroundDiv id="Home">
      <Flags>
        <Flag src='images/en.png' alt='en' onClick={() => props.changeLang('en')} />
        <Flag src='images/fr.png' alt='fr' onClick={() => props.changeLang('fr')} />
      </Flags>
      <CenterDiv>
        <LogoDiv>
          <Logo src='images/profilepic_croped.png' alt='david elmalih logo' />
        </LogoDiv>
        <Name>{lang.name}</Name>
        <SubName>{lang.infos}</SubName>
        <SubName>{lang.studies}</SubName>
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
}

BigBackground.propTypes = {
  lang: PropTypes.string,
  changeLang: PropTypes.func
};

export default BigBackground;