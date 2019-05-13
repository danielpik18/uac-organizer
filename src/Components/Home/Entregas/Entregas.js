import React from 'react';
import Window from './../../../hoc/Window/Window';
import { WindowsContext } from './../../../Contexts/WindowsContext/WindowsContext';
import { TiTime } from 'react-icons/ti';

const Entregas = () => {
    return (
        <div>
            <WindowsContext.Consumer>
                {(context) => (
                    context.windows.entregas.open &&
                    <Window
                        title={context.windows.entregas.title}
                        width='400'
                        icon={TiTime}
                    >
                        <div style={{
                            backgroundColor: '#ccc'
                        }}>

                            <p>
                                Heeeeeeeeeeeeeeeeeeetloooooooo
                                asdddddddddddddddddddddddddddll
                                asdqweqweiueiteurtieruterteiteu
                            </p>

                        </div>
                    </Window>
                )
                }
            </WindowsContext.Consumer>
        </div>
    );
}

export default Entregas;