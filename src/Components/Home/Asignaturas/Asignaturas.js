import React from 'react';

import Window from './../../../hoc/Window/Window';
import { WindowsContext } from './../../../Contexts/WindowsContext/WindowsContext';
import { AsignaturasContext } from './../../../Contexts/AsignaturasContext/AsignaturasContext';

import { Grid, List, ListItem, Badge, Button } from '@material-ui/core';
import * as TipyIcons from 'react-icons/ti';

import styles from './Asignaturas.module.scss';

import asignaturas from './../../../dummyData/asignaturas';
import Asignatura from './Asignatura/Asignatura';
import SideMenu from '../SideMenu/SideMenu';

const Asignaturas = () => {
    const menuItems = [
        {
            name: 'Todas',
            icon: TipyIcons.TiThList,
            view: 'list'
        },
        {
            name: 'Con entrega',
            icon: TipyIcons.TiTime,
            view: 'listConEntregas'
        }
    ];

    const createAsignaturaJSX = (asignatura) => {
        const Icon = TipyIcons[asignatura.icon];

        return (
            <AsignaturasContext.Consumer key={asignatura.id}>
                {(context) => (
                    <ListItem
                        className={styles.asignaturaWrapper}
                        onClick={() => context.toggleView(`${context.views.asignatura}${asignatura.id}`)}
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
                                    <Button>
                                        <Badge badgeContent={asignatura.entregas.length} color="secondary">
                                            <TipyIcons.TiTime className={styles.asignaturaEntregasIcon} />
                                        </Badge>
                                    </Button>

                                }
                            </div>
                        </div>
                    </ListItem>
                )}
            </AsignaturasContext.Consumer>
        );
    }

    const renderAsignaturasList = () => {
        return (
            <List className={styles.asignaturas}>
                {
                    asignaturas
                        .sort((a, b) => (a.entregas.length < b.entregas.length) ? 1 : -1)
                        .map(asignatura => createAsignaturaJSX(asignatura))
                }
            </List>
        );
    };

    const renderAsignaturasListConEntregas = () => {
        const asignaturasConEntregas = asignaturas.filter(asignatura => asignatura.entregas.length > 0);

        return (
            <List className={styles.asignaturas}>
                {
                    asignaturasConEntregas.map(asignatura => createAsignaturaJSX(asignatura))
                }
            </List>
        )
    };

    const renderAsignatura = (view) => {
        const id = parseInt(view.slice(10));

        return <Asignatura id={id} />
    };

    return (
        <WindowsContext.Consumer>
            {
                (context) => (
                    context.windows.asignaturas.open &&

                    <Window
                        title={context.windows.asignaturas.title}
                        width={context.windows.asignaturas.width}
                        icon={context.windows.asignaturas.icon}
                    >
                        <Grid container>
                            <SideMenu
                                menuItems={menuItems}
                                context={AsignaturasContext}
                            />

                            <Grid item xs={9}>
                                <div className={styles.asignaturasWrapper}>
                                    <AsignaturasContext.Consumer>
                                        {(context) => {
                                            if (context.currentView === context.views.list) {
                                                return renderAsignaturasList();
                                            } else if (context.currentView === context.views.listConEntregas) {
                                                return renderAsignaturasListConEntregas();
                                            } else if (context.currentView.includes(context.views.asignatura)) {
                                                return renderAsignatura(context.currentView);
                                            }
                                        }}
                                    </AsignaturasContext.Consumer>
                                </div>
                            </Grid>
                        </Grid>
                    </Window>
                )
            }
        </WindowsContext.Consumer>
    );
}

export default Asignaturas;