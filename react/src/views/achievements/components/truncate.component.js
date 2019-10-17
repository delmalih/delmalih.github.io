// React requirements
import React, { Component } from 'react';
import Truncate from 'react-truncate';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

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
                    ellipsis={(<span>... <Button size="sm" color="link" onClick={this.toggleLines}>{more}</Button></span>)}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span> <Button size="sm" color="link" onClick={this.toggleLines}>{less}</Button></span>
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