import React from 'react';
import styles from './MenuLinks.module.scss';
import CircleLink from './CircleLink/CircleLink';

import { WindowsContext } from '../../../../Contexts/WindowsContext/WindowsContext';


const MenuLinks = ({ show }) => {
    return (
        <div className={
            `
                ${styles.MenuWrapper}
                ${show && styles.MenuWrapperShow}
            `
        }>
            <div className={styles.linksWrapper}>
                <WindowsContext.Consumer>
                    {(context) => (
                        Object.values(context.windows).map(window => (
                            <CircleLink
                                key={window.title}
                                icon={context.windows[window.title].icon}
                                title={window.title}
                                clicked={context.toggleWindow}
                            />

                        ))
                    )}
                </WindowsContext.Consumer>
            </div>
        </div>
    );
}

export default MenuLinks;