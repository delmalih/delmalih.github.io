// React
import React, { Component } from 'react';

// Local
import Navbar from './navbar/';
import BigBackground from './bigBackground/';
import Bio from './bio/';
import MiddleBar from './middleBar/';
import Contact from './contact/';
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
        <Bio lang={lang} />
        <MiddleBar lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>
    );
  }
}

export default Home;
