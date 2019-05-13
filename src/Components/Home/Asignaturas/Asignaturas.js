import React from 'react';
import Window from './../../../hoc/Window/Window';
import { WindowsContext } from './../../../Contexts/WindowsContext/WindowsContext';

import { Grid, List, ListItem, ListItemIcon, ListItemText, Badge, Button } from '@material-ui/core';
import * as TipyIcons from 'react-icons/ti';

import styles from './Asignaturas.module.scss';

import asignaturas from './../../../dummyData/asignaturas';

const Asignaturas = () => {
    const { TiEdit, TiThList, TiTime } = TipyIcons;

    return (
        <div>
            <WindowsContext.Consumer>
                {(context) => (
                    context.windows.asignaturas.open &&
                    <Window
                        title='asignaturas'
                        width={600}
                        icon={TiEdit}
                    >
                        <div className={styles.asignaturasWrapper}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <div className={styles.asignaturasMenuWrapper}>
                                        <List className={styles.asignaturasMenu}>
                                            <ListItem button className={styles.asignaturasMenuItem}>
                                                <ListItemIcon className={styles.asignaturasMenuIcon}>
                                                    <TiThList />
                                                </ListItemIcon>
                                                <ListItemText secondary='Todas' />
                                            </ListItem>
                                            <ListItem button className={styles.asignaturasMenuItem}>
                                                <ListItemIcon className={styles.asignaturasMenuIcon}>
                                                    <TiTime />
                                                </ListItemIcon>
                                                <ListItemText secondary='Con entregas' />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>

                                <Grid xs={9}>
                                    <List className={styles.asignaturas}>
                                        {
                                            asignaturas.map(asignatura => {
                                                const Icon = TipyIcons[asignatura.icon];

                                                return (
                                                    <ListItem key={asignatura.id} className={styles.asignaturaWrapper}>
                                                        <div className={styles.asignatura}>
                                                            <div className={styles.asignaturaTitle}>
                                                                <Icon className={styles.asignaturaIcon} />
                                                                <b>
                                                                    {asignatura.name}
                                                                </b>
                                                            </div>

                                                            <div className={styles.asignaturaEntregas}>
                                                                <Button>
                                                                    <Badge badgeContent={asignatura.entregas} color="secondary">
                                                                        <TiTime className={styles.asignaturaEntregasIcon} />
                                                                    </Badge>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </List>
                                </Grid>
                            </Grid>
                        </div>
                    </Window>
                )
                }
            </WindowsContext.Consumer>
        </div>
    );
}

export default Asignaturas;