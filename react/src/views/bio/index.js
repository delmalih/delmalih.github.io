// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Local
import QuickBio from './components/quickBio.component';
import Skills from './components/skills.component';
import ListEvents from './components/listEvents.component';

// Langs
import Lang_en from './langs/en';
import Lang_fr from './langs/fr';

// Style
import {
  BackgroundDiv,
  Container,
  Title,
  Content,
  ContentCol,
  Menu,
  MenuItem,
  ContentDiv,
} from './style';

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 0,
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({ view });
  }

  render() {
    const lang = this.props.lang === 'fr' ? Lang_fr : Lang_en;
    return (
      <BackgroundDiv id="Bio">
        <Container>
          <Title>{lang.title}</Title>
          <Content>
            <ContentCol lg={3} md={4} xs={12}>
              <Menu>
                <MenuItem
                  color={this.state.view !== 0 ? 'link' : 'secondary'}
                  active={this.state.view === 0}
                  onClick={() => this.changeView(0)}
                >
                  {lang.view0}
                </MenuItem>
                <MenuItem
                  color={this.state.view !== 1 ? 'link' : 'secondary'}
                  active={this.state.view === 1}
                  onClick={() => this.changeView(1)}
                >
                  {lang.view1}
                </MenuItem>
                <MenuItem
                  color={this.state.view !== 2 ? 'link' : 'secondary'}
                  active={this.state.view === 2}
                  onClick={() => this.changeView(2)}
                >
                  {lang.view2}
                </MenuItem>
                <MenuItem
                  color={this.state.view !== 3 ? 'link' : 'secondary'}
                  active={this.state.view === 3}
                  onClick={() => this.changeView(3)}
                >
                  {lang.view3}
                </MenuItem>
                <MenuItem
                  color={this.state.view !== 4 ? 'link' : 'secondary'}
                  active={this.state.view === 4}
                  onClick={() => this.changeView(4)}
                >
                  {lang.view4}
                </MenuItem>
              </Menu>
            </ContentCol>
            <ContentCol lg={9} md={8} xs={12}>
              <ContentDiv>
                {this.state.view === 0 ? <QuickBio lang={lang} /> : ""}
                {this.state.view === 1 ? <Skills skills={lang.skills} /> : ""}
                {this.state.view === 2 ? <ListEvents events={lang.experience} /> : ""}
                {this.state.view === 3 ? <ListEvents events={lang.achievements} /> : ""}
                {this.state.view === 4 ? <ListEvents events={lang.education} /> : ""}
              </ContentDiv>
            </ContentCol>
          </Content>
        </Container>
      </BackgroundDiv>
    );
  }
}

Bio.propTypes = {
  lang: PropTypes.node,
}

export default Bio;