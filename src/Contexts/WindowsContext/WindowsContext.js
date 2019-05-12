import React, { Component } from 'react';

const WindowsContext = React.createContext();

class WindowsContextProvider extends Component {
    state = {
        windows: {
            asignaturas: {
                width: '',
                open: true
            }
        }
    }

    toggleWindow = (window) => {
        this.setState({
            windows: {
                [window]: !this.state.windows[window].open
            }
        });
    }

    render() {
        const { context: WindowsContext, children } = this.props;

        return (
            <WindowsContext.Provider value={{
                state: { ...this.state.windows },
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