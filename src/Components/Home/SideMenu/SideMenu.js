import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import styles from './SideMenu.module.scss';

const SideMenu = ({ context: Context, menuItems }) => {
    return (
        <Grid item xs={3}>
            <div className={styles.asignaturasMenuWrapper}>
                <List className={styles.asignaturasMenu}>
                    <Context.Consumer>
                        {(context) => {
                            return menuItems.map(item => {
                                const Icon = item.icon;

                                return (
                                    <ListItem
                                        key={item.name}
                                        button
                                        className={styles.asignaturasMenuItem}
                                        onClick={() => context.toggleView(item.view)}
                                    >
                                        <ListItemIcon className={styles.asignaturasMenuIcon}>
                                            <Icon />
                                        </ListItemIcon>
                                        <ListItemText secondary={item.name} />
                                    </ListItem>
                                );
                            })
                        }}
                    </Context.Consumer>
                </List>
            </div>
        </Grid>
    );
}

export default SideMenu;