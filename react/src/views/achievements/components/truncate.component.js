// React requirements
import React, { Component } from 'react';
import Truncate from 'react-truncate';
import PropTypes from 'prop-types';

class CustomTruncate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            truncated: false
        };

        this.handleTruncate = this.handleTruncate.bind(this);
        this.toggleLines = this.toggleLines.bind(this);
    }

    handleTruncate(truncated) {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }

    toggleLines(event) {
        event.preventDefault();

        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const {
            children,
            more,
            less,
            lines
        } = this.props;

        const {
            expanded,
            truncated
        } = this.state;

        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(<span>... <a href='#' onClick={this.toggleLines}>{more}</a></span>)}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span> <a href='#' onClick={this.toggleLines}>{less}</a></span>
                )}
            </div>
        );
    }
}

CustomTruncate.propTypes = {
    children: PropTypes.node,
    more: PropTypes.string,
    less: PropTypes.string,
    lines: PropTypes.any,
}

CustomTruncate.defaultProps = {
    more: "Show more",
    less: "Show less",
    lines: 3,
}

export default CustomTruncate