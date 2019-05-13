import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './TopBar.module.scss';
import { CapitalizeFirstLetter } from './../../../utils/misc';

import { WindowsContext } from '../../../Contexts/WindowsContext/WindowsContext';

const TopBar = ({ topbarIcon: TopbarIcon, windowTitle }) => {
    return (
        <WindowsContext.Consumer>
            {(context) => (
                <div className={'dragHandle'}
                    style={{
                        backgroundColor: '#303030',
                        cursor: 'move',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '2rem'
                    }}>

                    <div className={styles.windowTitle}>
                        <TopbarIcon style={{ marginRight: '.6rem' }} />
                        {CapitalizeFirstLetter(windowTitle)}
                    </div>

                    <div
                        className={styles.closeButtonWrapper}
                        onClick={() => context.toggleWindow(windowTitle)}
                    >
                        <IoIosClose style={{
                            color: 'white',
                            fontSize: '1.4rem'
                        }} />
                    </div>
                </div>
            )}
        </WindowsContext.Consumer>
    );
}

export default TopBar;