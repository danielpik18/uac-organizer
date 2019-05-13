import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { TiThList, TiTime } from 'react-icons/ti';

import styles from './AsignaturasMenu.module.scss';

import { AsignaturasContext } from '../../../../Contexts/AsignaturasContext/AsignaturasContext';

const AsignaturasMenu = () => {
    return (
        <Grid item xs={3}>
            <div className={styles.asignaturasMenuWrapper}>
                <List className={styles.asignaturasMenu}>
                    <AsignaturasContext.Consumer>
                        {(context) => {
                            const menuItems = [
                                {
                                    name: 'Todas',
                                    icon: TiThList,
                                    view: context.views.list
                                },
                                {
                                    name: 'Con entrega',
                                    icon: TiTime,
                                    view: context.views.listConEntregas
                                }
                            ];

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
                    </AsignaturasContext.Consumer>
                </List>
            </div>
        </Grid>
    );
}

export default AsignaturasMenu;