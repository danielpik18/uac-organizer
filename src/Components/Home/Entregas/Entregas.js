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
            name: 'Todas',
            icon: TipyIcons.TiThList,
            view: 'todas'
        },
        {
            name: 'Esta semana',
            icon: TipyIcons.TiTime,
            view: 'estaSemana'
        },
        {
            name: 'Proxima semana',
            icon: TipyIcons.TiTime,
            view: 'proximaSemana'
        }
    ];

    const renderAll = () => {
        return (
            entregas.map(entrega => <Entrega key={entrega.id} data={entrega} />)
        );
    }

    const renderThisWeek = () => entregas.map(entrega => {
        const date = new Date('2019, 5, 15');
        const date2 = new Date('2019, 5, 16');

        const dateDiff = Math.abs(Date.parse(date) - Date.parse(date2));
        console.log(Math.floor(dateDiff) / 86400000);

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
                                        if (context.currentView === context.views.todas) {
                                            return renderAll()
                                        }
                                        else if (context.currentView === context.views.estaSemana) {
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