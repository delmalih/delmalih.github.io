// React requirement
import { styled } from 'styletron-react';
import { Container as Cont, Badge as B } from 'reactstrap';
import { VerticalTimeline as VT, VerticalTimelineElement as VTE }  from 'react-vertical-timeline-component';

export const BackgroundDiv = styled('div', () => ({
  backgroundColor: '#E0E1E1',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
}));

export const Container = styled(Cont, () => ({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  color: '#222',
}));

export const Title = styled('div', () => ({
  padding: '20px',
  fontSize: '45px',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alinItems: 'center',
  justifyContent: 'center',
}));

export const VerticalTimeline = styled(VT, () => ({

}));

export const VerticalTimelineElement = styled(VTE, () => ({

}));

export const VerticalTimelineTitle = styled('h3', () => ({
  fontSize: '1.25em',
  fontWeight: 'bold',
}));

export const VerticalTimelineSubTitle = styled('h4', () => ({
  fontSize: '1.0em',
  fontWeight: 'bold',
}));

export const BadgeContainer = styled('div', () => ({
  marginBottom: '10px',
}));

export const Badge = styled(B, () => ({
  marginLeft: '2px',
  marginRight: '2px',
  padding: '5px',
}));