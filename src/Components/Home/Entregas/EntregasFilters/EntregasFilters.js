import React from 'react';
import styles from './EntregasFilters.module.scss';
import { EntregasContext } from '../../../../Contexts/EntregasContext/EntregasContext';
import { selectOptions, properWeekDays, filterTypes } from './hardCodedData';

const EntregasFilters = ({ windowContext }) => {
    const AsignaturasIcon = windowContext.windows.asignaturas.icon;
    const EntregasIcon = windowContext.windows.entregas.icon;

    const filterEntregas = ({ filter, filterType, filterValue, context }) => {
        if (filterType === filterTypes.sortByAsignatura) {
            if (Number(filterValue)) {
                const asignaturaID = Number(filterValue);

                context.assignFilter(
                    (entrega) => filter(entrega, asignaturaID),
                    filterType
                );
            } else {
                context.assignFilter(null, filterTypes.sortByAsignatura);
            }
        } else if (filterType === filterTypes.sortByPlazo) {
            const plazo = filterValue;

            context.assignFilter(
                (entrega) => filter(entrega, plazo),
                filterType
            );
        }
    };

    const filters = [
        {
            id: filterTypes.sortByAsignatura,
            handle: (context, event) => filterEntregas({
                filter: (entrega, asignaturaFilterID) => {
                    return entrega.asignaturaID === asignaturaFilterID;
                },
                filterType: event.target.id,
                filterValue: event.target.value,
                context
            }),
            name: 'Asignatura',
            icon: AsignaturasIcon,
            options: selectOptions.asignaturas
        },

        {
            id: filterTypes.sortByPlazo,
            handle: (context, event) => filterEntregas({
                filter: (entrega, plazo) => {
                    let today = new Date();

                    //Sunday = 0, Monday = 1, Tuesday = 2 and so on...
                    today = today.getDay();

                    today = properWeekDays[today];

                    if (plazo === 'estaSemana') {
                        return entrega.daysUntilDeadline < (7 - today);
                    }
                    else if (plazo === 'proximaSemana') {
                        return entrega.daysUntilDeadline > (7 - today);
                    } else {
                        return entrega;
                    }
                },
                filterType: event.target.id,
                filterValue: event.target.value,
                context
            }),
            name: 'Plazo',
            icon: EntregasIcon,
            options: selectOptions.plazo
        }
    ];

    const renderFilters = (filters) => filters.map((filter, i) => {
        const Icon = filter.icon;

        return (
            <div key={i}>
                <div className={styles.sortByText}>
                    <Icon className={styles.sortByIcon} />
                    <span>{filter.name}:</span>
                </div>

                <div>
                    <EntregasContext.Consumer>
                        {(context) => {
                            return (
                                <select
                                    id={filter.id}
                                    className={styles.sortBySelect}
                                    onChange={(event) => filter.handle(context, event)}
                                >
                                    {
                                        filter.options.map(option => (
                                            <option
                                                value={option.value}
                                                key={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))
                                    }
                                </select>
                            );
                        }}
                    </EntregasContext.Consumer>
                </div>
            </div>
        );
    });

    return (
        <div className={styles.entregasFilters}>
            <span className={styles.entregasFiltersText}>Ordenar por:</span>

            <div className={styles.sortBy}>
                {
                    renderFilters(filters)
                }
            </div>
        </div>
    );
};

export default EntregasFilters;