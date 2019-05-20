import React from 'react';
import styles from './EntregasFilter.module.scss';
import { TiTime } from 'react-icons/ti';

import { EntregasContext } from '../../../../Contexts/EntregasContext/EntregasContext';
import { selectOptions, properWeekDays, filterTypes } from './hardCodedData';

const EntregasFilter = ({ windowContext }) => {
    const AsignaturasIcon = windowContext.windows.asignaturas.icon;

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


    const filters = {
        sortByAsignatura: (context, event) => filterEntregas({
            filter: (entrega, asignaturaFilterID) => {
                return entrega.asignaturaID === asignaturaFilterID;
            },
            filterType: event.target.id,
            filterValue: event.target.value,
            context
        }),

        sortByPlazo: (context, event) => filterEntregas({
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
        })
    };


    return (
        <div className={styles.entregasFilters}>
            <span className={styles.entregasFiltersText}>Ordenar por:</span>

            <div className={styles.sortBy}>
                <div>
                    <div className={styles.sortByText}>
                        <AsignaturasIcon className={styles.sortByIcon} />
                        <span>Asignatura:</span>
                    </div>

                    <div>
                        <EntregasContext.Consumer>
                            {(context) => {
                                return (
                                    <select
                                        id={filterTypes.sortByAsignatura}
                                        className={styles.sortBySelect}
                                        onChange={(event) => filters.sortByAsignatura(context, event)}
                                    >
                                        {
                                            selectOptions.asignaturas.map(option => (
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

                <div>
                    <div className={styles.sortByText}>
                        <TiTime className={styles.sortByIcon} />
                        <span>Plazo:</span>
                    </div>

                    <div>
                        <EntregasContext.Consumer>
                            {(context) => {
                                return (
                                    <select
                                        onChange={(event) => filters.sortByPlazo(context, event)}
                                        className={styles.sortBySelect}
                                        id={filterTypes.sortByPlazo}>
                                        {
                                            selectOptions.plazo.map(option => (
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

            </div>
        </div>
    );
};

export default EntregasFilter;