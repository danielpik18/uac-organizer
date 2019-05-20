import React, { Component } from 'react';

const EntregasContext = React.createContext();

class EntregasContextProvider extends Component {
    state = {
        currentView: 'tareas',
        views: {
            tareas: {
                name: 'tareas',
                filters: []
            },
            proyectos: 'proyectos'
        }
    };

    toggleView = (view) => {
        this.setState({ currentView: view });
    };

    assignFilter = (filter, filterType) => {
        const { currentView } = this.state;

        const sameTypeFilters = this.state.views[currentView].filters.filter(
            filter => filter.filterType === filterType
        );

        const viewToFilter = this.state.views[this.state.currentView];

        const flushFilters = () => {
            viewToFilter.filters = viewToFilter.filters.filter(
                filter => filter.filterType !== filterType);
        }

        if (filter) {
            if (sameTypeFilters.length === 0) {
                viewToFilter.filters.push({
                    filterType,
                    filter
                });
            } else {
                flushFilters();

                viewToFilter.filters.push({
                    filterType,
                    filter
                });
            }
        } else {
            flushFilters();
        }

        this.setState({
            views: {
                [this.state.currentView]: viewToFilter
            }
        });

    };

    render() {
        const { context: EntregasContext, children } = this.props;

        return (
            <EntregasContext.Provider value={{
                ...this.state,
                toggleView: this.toggleView,
                assignFilter: this.assignFilter
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