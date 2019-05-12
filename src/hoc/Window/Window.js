import React from 'react';
import Draggable from 'react-draggable';
import styles from './Window.module.scss';
import TopBar from './TopBar/TopBar';

const Window = ({ width, title, children }) => {
    return (
        <Draggable
            defaultPosition={{ x: 85, y: 85 }}
            grid={[25, 25]}
            handle='.dragHandle'
            bounds='body'
        >
            <div
                className={styles.window}
                style={{
                    width,
                }}
            >
                <TopBar windowTitle={title} />

                {children}
            </div>
        </Draggable>
    );
}

export default Window;