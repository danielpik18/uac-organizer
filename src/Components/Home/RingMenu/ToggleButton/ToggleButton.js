import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import styles from './ToggleButton.module.scss';

const ToggleButton = ({ open, clicked }) => {
    return (
        <div style={{
            position: 'relative'
        }}>
            <div className={styles.toggleButtonWrapper}>
                <IoIosAddCircle
                    onClick={clicked}
                    className={
                        `
                            ${styles.toggleIcon}
                            ${open && styles.toggleIconAnimation}    
                        `
                    }
                />
            </div>

            <div className={
                `
            ${styles.redGradient}
            ${open && styles.redGradientShow}
        `
            }>
            </div>
        </div>
    );
}

export default ToggleButton;