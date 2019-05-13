import React from 'react';
import RingMenu from './RingMenu/RingMenu';

import { WindowsContext, WindowsContextProvider } from '../../Contexts/WindowsContext/WindowsContext';
import Asignaturas from './Asignaturas/Asignaturas';
import { AsignaturasContext, AsignaturasContextProvider } from '../../Contexts/AsignaturasContext/AsignaturasContext';

import Entregas from './Entregas/Entregas';

const Home = () => {
    return (
        <WindowsContextProvider context={WindowsContext}>
            <RingMenu />

            <AsignaturasContextProvider context={AsignaturasContext}>
                <Asignaturas />
            </AsignaturasContextProvider>

            <Entregas />
        </WindowsContextProvider>
    );
}

export default Home;