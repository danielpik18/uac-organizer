import React, { Component } from 'react';

const EntregasContext = React.createContext();

class EntregasContextProvider extends Component {
    state = {
        currentView: 'todas',
        views: {
            todas: 'todas',
            estaSemana: 'estaSemana',
            proximaSemana: 'proximaSemana'

        }
    }

    toggleView = (view) => {
        this.setState({ currentView: view });
    };

    render() {
        const { context: EntregasContext, children } = this.props;

        return (
            <EntregasContext.Provider value={{
                ...this.state,
                toggleView: this.toggleView
            }
            }>
                {children}
            </EntregasContext.Provider >
        );
    }
}

export {
    EntregasContext,
    EntregasContextProvider
};