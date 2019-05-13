import React, { Component } from 'react';
import styles from './CircleLink.module.scss';
import { Tooltip } from '@material-ui/core';
import { CapitalizeFirstLetter } from './../../../../../utils/misc';

class CircleLink extends Component {
    render() {
        const { icon: Icon, title, clicked } = this.props;
        return (
            <Tooltip title={CapitalizeFirstLetter(title)}>
                <div
                    className={styles.circleLink}
                    onClick={() => clicked(title)}
                >
                    <Icon className={styles.linkIcon} />
                </div>
            </Tooltip>
        );
    }
}

export default CircleLink;