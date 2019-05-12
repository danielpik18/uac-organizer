import React, { Component } from 'react';
import styles from './CircleLink.module.scss';
import { Tooltip } from '@material-ui/core';

class CircleLink extends Component {
    render() {
        const { icon: Icon, title } = this.props;
        return (
            <Tooltip title={title}>
                <div
                    className={styles.circleLink}
                    onMouseEnter={() => console.log(title)}>
                    <Icon className={styles.linkIcon} />
                </div>
            </Tooltip>
        );
    }
}

export default CircleLink;