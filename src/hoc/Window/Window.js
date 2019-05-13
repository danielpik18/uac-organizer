import React from 'react';
import Draggable from 'react-draggable';
import styles from './Window.module.scss';
import TopBar from './TopBar/TopBar';
import { getRandomNumber } from './../../utils/misc';

const Window = ({ title, width, icon, children }) => {

    const defaultPosition =
    {
        x: getRandomNumber(0, window.innerWidth - width),
        y: getRandomNumber(0, window.innerHeight - width / 2)
    }

    return (
        <Draggable
            defaultPosition={defaultPosition}
            grid={[25, 25]}
            handle='.dragHandle'
            bounds='body'
        >
            <div
                style={{
                    width: `${width}px`
                }}
                className={styles.window}
            >
                <TopBar windowTitle={title} topbarIcon={icon} />

                {children}
            </div>
        </Draggable>
    );
}

export default Window;