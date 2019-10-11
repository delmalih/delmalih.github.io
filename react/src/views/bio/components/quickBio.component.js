// React
import React from 'react';
import Fa from 'react-fontawesome';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

// Style
import {
  Item,
  ItemIcon,
  ItemContent,
  Lang,
  LangTitle,
} from '../styles/quickBio.style';

const QuickBio = props => (
  <div>
    <Item>
      <ItemIcon><Fa name='map-marker' /></ItemIcon>
      <ItemContent>{props.lang.location}</ItemContent>
    </Item>
    <Item>
      <ItemIcon><Fa name='envelope-o' /></ItemIcon>
      <ItemContent>{props.lang.mail}</ItemContent>
    </Item>
    <Item>
      <ItemIcon><Fa name='phone' /></ItemIcon>
      <ItemContent>{props.lang.phone}</ItemContent>
    </Item>
    <hr />
    <Item>
      <ItemIcon><Fa name='globe' /></ItemIcon>
      <ItemContent><b>{props.lang.languageTitle}</b></ItemContent>
    </Item>
    <Lang>
      <LangTitle>{props.lang.fr}</LangTitle>
      <Progress color="info" value="100" />
    </Lang>
    <Lang>
      <LangTitle>{props.lang.en}</LangTitle>
      <Progress color="info" value="85" />
    </Lang>
    <Lang>
      <LangTitle>{props.lang.is}</LangTitle>
      <Progress color="info" value="55" />
    </Lang>
    <Lang>
      <LangTitle>{props.lang.ar}</LangTitle>
      <Progress color="info" value="45" />
    </Lang>
  </div>
);

QuickBio.propTypes = {
  lang: PropTypes.node,
}

export default QuickBio;