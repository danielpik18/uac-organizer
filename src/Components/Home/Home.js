import React from 'react';
import RingMenu from './RingMenu/RingMenu';

import { WindowsContext, WindowsContextProvider } from '../../Contexts/WindowsContext/WindowsContext';
import Asignaturas from './Asignaturas/Asignaturas';
import Entregas from './Entregas/Entregas';

const Home = () => {
    return (
        <WindowsContextProvider context={WindowsContext}>
            <RingMenu />

            <Asignaturas />
            <Entregas />
        </WindowsContextProvider>
    );
}

export default Home;