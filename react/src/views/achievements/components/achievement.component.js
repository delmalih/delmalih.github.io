// React requirement
import React from 'react';
import PropTypes from 'prop-types';

// Style
import {
    Toast,
    ToastImgContainer,
    ToastImg,
    ToastHeader,
    ToastBody,
    ToastFooter,
} from '../styles/achievement.style';

const Achievement = props => (
    <Toast>
        {
            props.imageSrc &&
            <ToastImgContainer>
                <ToastImg src={props.imageSrc} alt={props.title} />
            </ToastImgContainer>
        }
        <ToastHeader>{props.title}</ToastHeader>
        <ToastBody>{props.content}</ToastBody>
        {
            props.results &&
            <ToastFooter>{props.results}</ToastFooter>
        }
    </Toast>
);

Achievement.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    content: PropTypes.any,
    results: PropTypes.any,
};

export default Achievement;