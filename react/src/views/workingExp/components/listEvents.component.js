// React
import React from 'react';
import Fa from 'react-fontawesome';
import PropTypes from 'prop-types';

// Style
import {
    Period,
    Description,
    Media,
} from '../style';

const ListEvents = props => (
  <div>
    {
      props.events.map((event, key) => (
        <div key={key}>
          <Media key={key}>
            {
              event.imgSrc &&
              <Media left>
                <Media object src={event.imgSrc} alt="achievement heading" />
              </Media>
            }
            <Media body>
              <Media heading>
                <b>{event.title}</b>
                {
                  event.date && 
                  <Period>
                    <Fa name='calendar' />{' '}
                    {event.date}
                  </Period>
                }
              </Media>
              <Description>
                {event.description}
              </Description>
            </Media>
          </Media>
          <hr />
        </div>
      ))
    }
  </div>
);

ListEvents.propTypes = {
    events: PropTypes.array,
}

export default ListEvents;