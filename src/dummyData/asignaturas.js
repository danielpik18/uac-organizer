import cssColors from './../scss/_colors.scss';
import entregas from './entregas';

export default [
    {
        id: 1,
        name: 'Ecuaciones lineales',
        entregas: entregas.filter(entrega => entrega.asignaturaID === 1),
        icon: 'TiPi',
        color: cssColors.blue
    },
    {
        id: 2,
        name: 'Ingles IV',
        entregas: entregas.filter(entrega => entrega.asignaturaID === 2),
        icon: 'TiSortAlphabeticallyOutline',
        color: cssColors.green
    },
    {
        id: 3,
        name: 'Estadistica II',
        entregas: entregas.filter(entrega => entrega.asignaturaID === 3),
        icon: 'TiChartBar',
        color: cssColors.yellowSemiDark
    },
    {
        id: 4,
        name: 'Redes II',
        entregas: entregas.filter(entrega => entrega.asignaturaID === 4),
        icon: 'TiFlowMerge',
        color: cssColors.purple
    }
]