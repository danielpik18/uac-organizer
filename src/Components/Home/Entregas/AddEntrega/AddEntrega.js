import React, { Component } from 'react';
import asignaturas from './../../../../dummyData/asignaturas';
import Select from 'react-select';
import styles from './AddEntrega.module.scss';
import { Fade, TextField, Input } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { IoIosRibbon, IoMdCreate, IoMdCalendar } from 'react-icons/io';


class AddEntrega extends Component {

    state = {
        filled: {
            asignatura: false,
            name: false,
            date: false
        },
        data: {
            asignatura: null,
            name: null,
            date: new Date()
        }
    }

    options = asignaturas.map(asignatura => {
        return {
            value: asignatura.id,
            label: asignatura.name
        }
    });

    handleDateChange = (date) => {
        const data = { ...this.state.data };

        data.date = date;

        this.setState({ data });
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Fade in>
                    <div className={styles.inputWrapper}>
                        <div className={styles.inputTitleWrapper}>
                            <IoIosRibbon className={styles.inputIcon} />

                            <div className={styles.inputTitle}>
                                <span>¿Para cual asignatura?</span>
                            </div>
                        </div>

                        <div>
                            <Select
                                options={this.options}
                                onChange={(option) => {
                                    const filled = { ...this.state.filled };
                                    const data = { ...this.state.data };

                                    filled.asignatura = true;
                                    data.asignatura = option.value;

                                    this.setState({ filled, data });
                                }}
                            />
                        </div>
                    </div>
                </Fade>

                {
                    this.state.filled.asignatura &&
                    <Fade in>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputTitleWrapper}>
                                <IoMdCreate className={styles.inputIcon} />

                                <div className={styles.inputTitle}>
                                    <span>¿Que debes realizar?</span>
                                </div>
                            </div>

                            <div>
                                <TextField
                                    fullWidth
                                    label='Nombre de la entrega'
                                    className={styles.textField}
                                    onBlur={(event) => {
                                        if (event.target.value) {
                                            const filled = { ...this.state.filled };
                                            filled.name = true;
                                            this.setState({ filled });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </Fade>
                }

                {
                    this.state.filled.name &&
                    <Fade in>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputTitleWrapper}>
                                <IoMdCalendar className={styles.inputIcon} />

                                <div className={styles.inputTitle}>
                                    <span>¿Para cuando?</span>
                                </div>
                            </div>

                            <div>
                                <DatePicker
                                    selected={this.state.data.date}
                                    onChange={this.handleDateChange}
                                    customInput={
                                        <Input
                                            fullWidth
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </Fade>
                }
            </div>
        );
    }
}

export default AddEntrega;