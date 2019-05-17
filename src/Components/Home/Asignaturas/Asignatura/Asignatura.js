import React from 'react';
import { Typography, Divider, Button, Badge } from '@material-ui/core';
import { Fade } from 'react-reveal';
import asignaturas from './../../../../dummyData/asignaturas';
import * as TipyIcons from 'react-icons/ti';
import styles from './Asignatura.module.scss';

const Asignatura = ({ id }) => {
    const asignatura = asignaturas.filter(asignatura => asignatura.id === id)[0];
    const Icon = TipyIcons[asignatura.icon];


    return (
        <div>
            <div
                className={styles.asignaturaHeader}
                style={{
                    color: asignatura.color
                }}
            >
                <div className={styles.asignaturaHeaderTitle}>
                    <Icon className={styles.asignaturaHeaderIcon} />
                    <Typography variant='h6' color='inherit'>
                        {asignatura.name}
                    </Typography>
                </div>


                {
                    asignatura.entregas.length > 0 &&
                    <Button>
                        <Badge badgeContent={asignatura.entregas.length} color="secondary">
                            <TipyIcons.TiTime className={styles.asignaturaHeaderEntregasIcon} />
                        </Badge>
                    </Button>
                }
            </div>

            <Divider variant='fullWidth' />

            <Fade>
                <div className={styles.asignaturaInfo}>
                    <div>
                        <p><span className={styles.asignaturaInfoText}>Nota mas alta:</span>3.7</p>
                        <p><span className={styles.asignaturaInfoText}>Nota mas baja:</span>2</p>
                        <p><span className={styles.asignaturaInfoText}>Nota promedio:</span>3.4</p>
                    </div>
                    <div>
                        <p><span className={styles.asignaturaInfoText}>Trabajos entregados:</span>3</p>
                        <p><span className={styles.asignaturaInfoText}>Trabajos ganados:</span> 3</p>
                        <p><span className={styles.asignaturaInfoText}>Trabajos perdidos:</span>0</p>
                    </div>
                </div>
            </Fade>

        </div>
    );
}

export default Asignatura;