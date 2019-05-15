import React from 'react';
import styles from './Entrega.module.scss';
import { Grow, Grid } from '@material-ui/core';

const Entrega = ({ data, time }) => {
    return (
        <Grow in={true} timeout={time}>
            <div className={styles.entrega}>
                <div
                    className={styles.entregaTitleWrapper}
                    style={{
                        background: `linear-gradient(${data.color}, ${data.colorSub})`
                    }}
                >
                    <p className={styles.entregaTitle}>
                        {
                            data.title.length > 25 ?
                                data.title.slice(0, 20) + '...'
                                : data.title
                        }
                    </p>
                </div>
                <div className={styles.entregaTimerWrapper}>
                    <Grid container>
                        <Grid item xs={4} style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <p className={styles.entregaText}>Fecha de entrega</p>
                        </Grid>
                        <Grid item xs={8}>
                            <div className={styles.entregaDate}>
                                <span style={{
                                    fontSize: '1.6rem',
                                    color: data.color
                                }}>
                                    5/16/2019
                                </span>
                                <span>@ 12:00 p.m</span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grow>
    );
}

export default Entrega;