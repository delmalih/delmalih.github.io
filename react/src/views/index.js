// React
import React, { Component } from 'react';

// Local
import Navbar from './navbar/';
import BigBackground from './bigBackground/';
import WorkingExp from './workingExp/';
import Skills from './skills/';
import QuickBio from './quickBio/';
import Footer from './footer/';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'en',
    };

    this.onChangeLang = this.onChangeLang.bind(this);
  }

  onChangeLang(lang) {
    this.setState({ lang });
  }

  render() {
    const { lang } = this.state;
    return (
      <div>
        <Navbar
          lang={lang}
          changeLang={this.onChangeLang}
        />
        <BigBackground
          lang={lang}
          changeLang={this.onChangeLang}
        />
        <WorkingExp lang={lang} />
        <Skills lang={lang} />
        <QuickBio lang={lang} />
        <Footer lang={lang} />
      </div>
    );
  }
}

export default Home;
