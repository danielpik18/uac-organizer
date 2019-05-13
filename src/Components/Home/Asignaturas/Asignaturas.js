import React from 'react';

import Window from './../../../hoc/Window/Window';
import { WindowsContext } from './../../../Contexts/WindowsContext/WindowsContext';
import { AsignaturasContext } from './../../../Contexts/AsignaturasContext/AsignaturasContext';

import { Grid, List, ListItem, Badge, Button } from '@material-ui/core';
import * as TipyIcons from 'react-icons/ti';
import { Fade } from 'react-reveal';

import styles from './Asignaturas.module.scss';

import asignaturas from './../../../dummyData/asignaturas';
import AsignaturasMenu from './AsignaturasMenu/AsignaturasMenu';

const Asignaturas = () => {
    const { TiEdit, TiTime } = TipyIcons;

    const createAsignaturaJSX = (asignatura) => {
        const Icon = TipyIcons[asignatura.icon];

        return (
            <AsignaturasContext.Consumer>
                {(context) => (
                    <ListItem
                        key={asignatura.id}
                        className={styles.asignaturaWrapper}
                        onClick={() => console.log(asignatura.id)}
                    >
                        <div className={styles.asignatura}>
                            <div
                                className={styles.asignaturaTitle}
                                style={{
                                    color: asignatura.color
                                }}
                            >
                                <Icon className={styles.asignaturaIcon} />
                                <b>
                                    {asignatura.name}
                                </b>
                            </div>

                            <div className={styles.asignaturaEntregas}>
                                {
                                    asignatura.entregas.length > 0 &&
                                    <Fade right>
                                        <Button>
                                            <Badge badgeContent={asignatura.entregas.length} color="secondary">
                                                <TiTime className={styles.asignaturaEntregasIcon} />
                                            </Badge>
                                        </Button>
                                    </Fade>
                                }
                            </div>
                        </div>
                    </ListItem>
                )}
            </AsignaturasContext.Consumer>
        );
    }

    const renderAsignaturas = () => {
        return asignaturas.map(asignatura => createAsignaturaJSX(asignatura))
    };

    const renderAsignaturasConEntregas = () => {
        const asignaturasConEntregas = asignaturas.filter(asignatura => asignatura.entregas.length > 0);

        return asignaturasConEntregas.map(asignatura => createAsignaturaJSX(asignatura));
    };

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
                                <AsignaturasMenu />

                                <Grid item xs={9}>
                                    <AsignaturasContext.Consumer>
                                        {(context) => {
                                            if (context.currentView === context.views.list) {
                                                return (
                                                    <List className={styles.asignaturas}>
                                                        {
                                                            renderAsignaturas()
                                                        }
                                                    </List>
                                                );
                                            } else if (context.currentView === context.views.listConEntregas) {
                                                return (
                                                    <List className={styles.asignaturas}>
                                                        {
                                                            renderAsignaturasConEntregas()
                                                        }
                                                    </List>
                                                );
                                            }
                                        }}
                                    </AsignaturasContext.Consumer>
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