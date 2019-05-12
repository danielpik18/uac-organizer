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
                <CircleLink icon={IoIosTime} title='Asignaturas' />
                <CircleLink icon={IoIosAttach} title='Asignaturas' />
                <CircleLink icon={IoIosCheckbox} title='Asignaturas' />
                <CircleLink icon={IoIosPerson} title='Asignaturas' />
                <CircleLink icon={IoMdConstruct} title='Asignaturas' />
            </div>
        </div>
    );
}

export default MenuLinks;