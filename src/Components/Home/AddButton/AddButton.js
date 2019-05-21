import React from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import { IoIosAdd } from 'react-icons/io';
import styles from './AddButton.module.scss';

const AddButton = ({ title, clicked }) => {
    return (
        <div className={styles.wrapper}>
            <Tooltip title={title}>
                <Fab
                    className={styles.button}
                    size='medium'
                    onClick={() => clicked()}
                >
                    <IoIosAdd className={styles.icon} />
                </Fab>
            </Tooltip>
        </div>
    );
}

export default AddButton;