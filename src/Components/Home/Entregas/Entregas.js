import React from 'react';
import Window from './../../../hoc/Window/Window';
import { WindowsContext } from './../../../Contexts/WindowsContext/WindowsContext';
import { EntregasContext } from '../../../Contexts/EntregasContext/EntregasContext';
import entregas from './../../../dummyData/entregas';

import * as TipyIcons from 'react-icons/ti';

import styles from './Entregas.module.scss';

import Entrega from './Entrega/Entrega';
import { Grid } from '@material-ui/core';
import SideMenu from '../SideMenu/SideMenu';

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
    entregas.map(entrega => {
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
    });

    const renderAll = () => {
        return (
            entregas.map(entrega => <Entrega key={entrega.id} data={entrega} />)
        );
    }

    const renderThisWeek = () => entregas.map(entrega => {


        return (
            <Entrega key={entrega.id} data={entrega} />
        )
    });

    return (
        <WindowsContext.Consumer>
            {(context) => (
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
                            <div className={styles.entregasWrapper}>
                                <EntregasContext.Consumer>
                                    {(context) => {
                                        if (context.currentView === context.views.tareas) {
                                            return renderAll()
                                        }
                                        else if (context.currentView === context.views.proyectos) {
                                            return renderThisWeek()
                                        }
                                    }}
                                </EntregasContext.Consumer>
                            </div>
                        </Grid>
                    </Grid>
                </Window>
            )
            }
        </WindowsContext.Consumer>
    );
}

export default Entregas;