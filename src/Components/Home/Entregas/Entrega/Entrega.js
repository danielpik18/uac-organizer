import React from 'react';
import styles from './Entrega.module.scss';
import { Tooltip } from '@material-ui/core';
import * as TipyIcons from 'react-icons/ti';

import { cutTextIfLongerThan } from './../../../../utils/misc';

import asignaturas from './../../../../dummyData/asignaturas';

const Entrega = ({ data }) => {
    const [date, dateTime] = data.date;
    let Icon = asignaturas.filter(asignatura => asignatura.id === data.asignaturaID)[0].icon;
    Icon = TipyIcons[Icon];

    return (
        <div className={styles.entrega}>
            <Tooltip title={data.title}>
                <div
                    className={styles.entregaTitle}
                    style={{
                        background: `linear-gradient(${data.color}, ${data.colorSub})`
                    }}
                >
                    <div className={styles.entregaTitleIcon}>
                        <Icon />
                    </div>

                    <div className={styles.entregaTitleText}>
                        {cutTextIfLongerThan(20, data.title, 20)}
                    </div>
                </div>
            </Tooltip>

            <div className={styles.entregaTimerWrapper}>
                <div className={styles.entregaDiasRestantes}>
                    <div className={styles.entregaDiasRestantesText}>
                        Dias restantes:
                        </div>

                    <div
                        className={styles.entregaDiasRestantesNumber}
                        style={{
                            color: data.color
                        }}
                    >
                        {data.daysUntilDeadline}
                    </div>
                </div>

                <div className={styles.entregaDate}>
                    {`${date} @ ${dateTime}`}
                </div>
            </div>
        </div>
    );
}

export default Entrega;