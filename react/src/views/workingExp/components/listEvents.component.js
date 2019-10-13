// React
import React from 'react';
import PropTypes from 'prop-types';
import ShowMore from 'react-show-more';

// Style
import {
    VerticalTimeline,
	VerticalTimelineElement,
	VerticalTimelineLogo,
	VerticalTimelineTitle,
	VerticalTimelineSubTitle,
	BadgeContainer,
	Badge,
} from '../style';

const VTElementStyle = {
	background: '#fff',
	color: '#222',
	borderRadius: '0.25em',
	padding: '1em',
	borderTop: '3px solid rgb(23, 162, 184)',
	boxShadow: '0 3px 0 #ddd',
	'-webkit-box-shadow': '0 3px 0 #ddd',
	'-moz-box-shadow': '0 3px 0 #ddd',
};

const VTElementArrowStyle = {
	borderRight: '7px solid  #fff',
};

const VTElementIconStyle = {
	background: '#fff',
	color: '#fff',
	borderRadius: '0',
};

const ListEvents = props => (
	<VerticalTimeline>
		{
			props.events.map((event, key) => (
				<VerticalTimelineElement
					key={key}
					className="vertical-timeline-element--work"
					contentStyle={VTElementStyle}
					contentArrowStyle={VTElementArrowStyle}
					date={event.date}
					iconStyle={VTElementIconStyle}
					icon={<VerticalTimelineLogo src={event.imageSrc} />}
				>
					{
						event.badges &&
						<BadgeContainer>
							{event.badges.map((badge, k) => <Badge outline color='info' key={k}>{badge}</Badge>)}
						</BadgeContainer>
					}
					<VerticalTimelineTitle className='vertical-timeline-element-title'>{event.title}</VerticalTimelineTitle>
					<VerticalTimelineSubTitle className='vertical-timeline-element-subtitle'>{event.location}</VerticalTimelineSubTitle>
					<br />
					<ShowMore>{event.description}</ShowMore>
				</VerticalTimelineElement>
			))
		}
	</VerticalTimeline>
)


ListEvents.propTypes = {
    events: PropTypes.array,
}

export default ListEvents;