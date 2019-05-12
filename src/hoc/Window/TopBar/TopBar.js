import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './TopBar.module.scss';
import { WindowsContext } from '../../../Contexts/WindowsContext/WindowsContext';


const TopBar = ({ windowTitle }) => {
    return (
        <WindowsContext.Consumer>
            {(context) => (
                <div className={'dragHandle'}
                    style={{
                        padding: '0',
                        height: '100%',
                        backgroundColor: '#303030',
                        cursor: 'move',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>

                    <div className={styles.windowTitle}>
                        {windowTitle.charAt(0).toUpperCase() + windowTitle.slice(1)}
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