import React from 'react';
import Window from './../../../hoc/Window/Window';
import { WindowsContext } from './../../../Contexts/WindowsContext/WindowsContext';

const Asignaturas = () => {
    return (
        <div>
            <WindowsContext.Consumer>
                {(context) => (
                    context.state.asignaturas.open &&
                    <Window
                        title='asignaturas'
                        width='30rem'
                    >
                        <div style={{
                            backgroundColor: '#ccc'
                        }}>

                            <ul>
                                <li>batman</li>
                                <li>superman</li>
                                <li>deadpool</li>
                                <li><a href='/'>Heyheyhey</a></li>
                            </ul>

                        </div>
                    </Window>
                )
                }
            </WindowsContext.Consumer>
        </div>
    );
}

export default Asignaturas;