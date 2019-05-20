import asignaturas from '../../../../dummyData/asignaturas';

export const selectOptions = {
    asignaturas: [
        {
            value: 'todas',
            label: 'Todas'
        },

        ...asignaturas.map(asignatura => {
            return {
                value: asignatura.id,
                label: asignatura.name
            };
        })
    ],

    plazo: [
        {
            value: 'ninguno',
            label: 'Ninguno'
        },
        {
            value: 'estaSemana',
            label: 'Para esta semana'
        },
        {
            value: 'proximaSemana',
            label: 'Para la proxima semana'
        }
    ]
};

export const properWeekDays = [
    7, //sunday
    1, //Monday
    2, //Tuesday and so...
    3,
    4,
    5,
    6
];

export const filterTypes = {
    sortByAsignatura: 'sortByAsignatura',
    sortByPlazo: 'sortByPlazo'
}