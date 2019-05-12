import React from 'react';
import styles from './MenuLinks.module.scss';
import CircleLink from './CircleLink/CircleLink';

import {
    IoIosApps,
    IoIosTime,
    IoIosAttach,
    IoIosCheckbox,
    IoIosPerson,
    IoMdConstruct
} from 'react-icons/io';

const MenuLinks = ({ show }) => {
    return (
        <div className={
            `
                ${styles.MenuWrapper}
                ${show && styles.MenuWrapperShow}
            `
        }>
            <div className={styles.linksWrapper}>
                <CircleLink icon={IoIosApps} title='Asignaturas' />
                <CircleLink icon={IoIosTime} />
                <CircleLink icon={IoIosAttach} />
                <CircleLink icon={IoIosCheckbox} />
                <CircleLink icon={IoIosPerson} />
                <CircleLink icon={IoMdConstruct} />
            </div>
        </div>
    );
}

export default MenuLinks;