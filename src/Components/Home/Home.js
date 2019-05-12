import React from 'react';
import RingMenu from './RingMenu/RingMenu';

import { WindowsContext, WindowsContextProvider } from '../../Contexts/WindowsContext/WindowsContext';
import Asignaturas from './Asignaturas/Asignaturas';

const Home = () => {
    return (
        <>
            <RingMenu />

            <WindowsContextProvider context={WindowsContext}>
                <Asignaturas />
            </WindowsContextProvider>
        </>
    );
}

export default Home;