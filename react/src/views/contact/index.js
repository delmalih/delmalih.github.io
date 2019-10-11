// React
import React, { Component } from 'react';
import { FormGroup, Input, Button, Alert } from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';

// Langs
import Lang_en from './langs/en';
import Lang_fr from './langs/fr';

// Style
import {
  BackgroundDiv,
  Container,
  Title,
  Form,
  ButtonDiv,
} from './style';

const sendMail = (nom, prenom, mail, msg) => (
  new Promise(resolve => {
    const url = 'http://davidelmalih.fr/sendMail.php';
    axios.get(url, { 
      params : { nom, prenom, mail, msg } ,
    })
    .then(res => { resolve(JSON.stringify(res.data)); })
    // eslint-disable-next-line
    .catch(err => { console.log(`sendMail : ${err}`); });
  })
);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      prenom: "",
      mail: "",
      message: "",
      alert: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  handleChange(key, val) {
    let new_state = Object.assign({}, this.state);
    new_state[key] = val;
    this.setState(new_state);
  }

  handleSubmit(e) {
    e.preventDefault();
    sendMail(this.state.nom, this.state.prenom, this.state.mail, this.state.message).then(() => this.setState({ alert: true }));
  }

  onDismiss() {
    this.setState({ alert: false });
  }

  render() {
    const lang = this.props.lang === 'fr' ? Lang_fr : Lang_en;
    return (
      <BackgroundDiv id="Contact">
        <Alert color="success" isOpen={false /*this.state.alert*/} toggle={this.onDismiss}>{lang.msgSent}</Alert>
        <Title>{lang.title}</Title>
        <Container>
          <Form>
            <FormGroup>
              <Input
                type="text"
                placeholder={`${lang.nom}...`}
                value={this.state.nom}
                onChange={e => this.handleChange('nom', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder={`${lang.prenom}...`}
                value={this.state.prenom}
                onChange={e => this.handleChange('prenom', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                placeholder={`${lang.mail}...`}
                value={this.state.mail}
                onChange={e => this.handleChange('mail', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                placeholder={`${lang.message}...`}
                value={this.state.message}
                rows={5}
                onChange={e => this.handleChange('message', e.target.value)}
              />
            </FormGroup>
            <ButtonDiv onClick={this.handleSubmit}>
              <Button block>{lang.submit} !</Button>
            </ButtonDiv>
          </Form>
        </Container>
      </BackgroundDiv>
    );
  }
}

Contact.propTypes = {
  lang: PropTypes.node,
}

export default Contact;