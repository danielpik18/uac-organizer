import React, { Component } from 'react';

const EntregasContext = React.createContext();

class EntregasContextProvider extends Component {
    state = {
        currentView: 'addEntrega',
        views: {
            tareas: {
                name: 'tareas',
                filters: []
            },
            addEntrega: {
                name: 'addEntrega'
            },
            proyectos: 'proyectos'
        }
    };

    toggleView = (view) => {
        const views = Object.values({ ...this.state.views });

        views.forEach(view => {
            if (view.filters) {
                view.filters = [];
            }
        });

        this.setState({
            currentView: view
        });
    };

    assignFilter = (filter, filterType) => {
        const currentView = `${this.state.currentView}`;

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

        const views = this.state.views;
        views[currentView] = viewToFilter;

        this.setState({
            views
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