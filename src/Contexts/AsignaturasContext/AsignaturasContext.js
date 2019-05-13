import React, { Component } from 'react';

const AsignaturasContext = React.createContext();

class AsignaturasContextProvider extends Component {
    state = {
        currentView: 'list',
        views: {
            list: 'list',
            listConEntregas: 'listConEntregas'

        }
    }

    toggleView = (view) => {
        this.setState({ currentView: view });
    };

    render() {
        const { context: AsignaturasContext, children } = this.props;

        return (
            <AsignaturasContext.Provider value={{
                ...this.state,
                toggleView: this.toggleView
            }
            }>
                {children}
            </AsignaturasContext.Provider >
        );
    }
}

export {
    AsignaturasContext,
    AsignaturasContextProvider
};