import React from 'react';
import Window from './../../../hoc/Window/Window';
import { WindowsContext } from './../../../Contexts/WindowsContext/WindowsContext';
import { EntregasContext } from '../../../Contexts/EntregasContext/EntregasContext';
import entregas from './../../../dummyData/entregas';

import * as TipyIcons from 'react-icons/ti';
import { Grid } from '@material-ui/core';

import styles from './Entregas.module.scss';

import Entrega from './Entrega/Entrega';
import SideMenu from '../SideMenu/SideMenu';
import EntregasFilters from './EntregasFilters/EntregasFilters';

const Entregas = () => {
    const menuItems = [
        {
            name: 'Tareas',
            icon: TipyIcons.TiThList,
            view: 'tareas'
        },
        {
            name: 'Proyectos',
            icon: TipyIcons.TiTime,
            view: 'proyectos'
        }
    ];

    //Some necessary date reformatting...
    const entregasFormatted = entregas.map(entrega => {
        const monthNames = [
            "Enero", "Febrero", "Marzo",
            "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"
        ];

        const today = new Date();
        const deadline = new Date(entrega.date);

        let daysUntilDeadline = Math.abs(
            Date.parse(today) - Date.parse(deadline)
        );

        daysUntilDeadline = Math.round(daysUntilDeadline / 86400000);

        entrega.daysUntilDeadline = daysUntilDeadline;
        entrega.date = [
            `${deadline.getDate()} de ${monthNames[deadline.getMonth()]}`,
            `${deadline.getHours()}:${deadline.getMinutes()}:${deadline.getSeconds()}`
        ];

        return entrega;
    });

    const renderAll = () => {
        return (
            entregasFormatted.map(
                entrega =>
                    <Entrega key={entrega.id} data={entrega} />
            )
        );
    }

    const renderFiltered = (filters) => {
        const entregasFiltered = entregasFormatted.filter(entrega => {
            return filters.every(
                filter => filter.filter && filter.filter(entrega)
            );
        });

        return entregasFiltered.map(entrega => {
            return (
                <Entrega key={entrega.id} data={entrega} />
            )
        });
    };


    return (
        <WindowsContext.Consumer>
            {(context) => {
                return (
                    context.windows.entregas.open &&

                    <Window
                        title={context.windows.entregas.title}
                        width={context.windows.entregas.width}
                        icon={context.windows.entregas.icon}
                    >
                        <Grid container>
                            <SideMenu
                                menuItems={menuItems}
                                context={EntregasContext}
                            />

                            <Grid item xs={9}>
                                <EntregasFilters windowContext={context} />

                                <div className={styles.entregasWrapper}>
                                    <div className={styles.entregasList}>
                                        <EntregasContext.Consumer>
                                            {(entregasContext) => {
                                                const views = entregasContext.views;

                                                if (entregasContext.currentView === views.tareas.name) {
                                                    if (views.tareas.filters.length > 0) {
                                                        return renderFiltered(views.tareas.filters)
                                                    }

                                                    return renderAll();
                                                }
                                            }}
                                        </EntregasContext.Consumer>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Window>
                );
            }
            }
        </WindowsContext.Consumer>
    );
}

export default Entregas;