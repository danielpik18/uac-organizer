import React, { Component } from 'react';
import {
    IoIosTime,
    IoIosRibbon
} from 'react-icons/io';

const WindowsContext = React.createContext();

class WindowsContextProvider extends Component {
    state = {
        windows: {
            asignaturas: {
                open: false,
                title: 'asignaturas',
                width: 700,
                icon: IoIosRibbon
            },
            entregas: {
                open: true,
                title: 'entregas',
                width: 700,
                icon: IoIosTime
            }
        }
    }

    toggleWindow = (window) => {
        const updatedWindows = { ...this.state.windows };
        updatedWindows[window].open = !updatedWindows[window].open;

        this.setState({
            windows: updatedWindows
        });
    }

    render() {
        const { context: WindowsContext, children } = this.props;

        return (
            <WindowsContext.Provider value={{
                windows: { ...this.state.windows },
                toggleWindow: this.toggleWindow
            }}>
                {children}
            </WindowsContext.Provider>
        );
    }
}

export {
    WindowsContext,
    WindowsContextProvider
};