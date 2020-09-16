import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2'
import { Grid } from '@material-ui/core';
import { fetchDailyData } from '../../API';
import styles from './Charts.module.css';

const Charts = ({data: {confirmed, deaths, recovered}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed})=> confirmed),
                        label: 'Infected',
                        borderColor: '#ffb007',
                        fill: true,
                    }, {
                            data: dailyData.map(({deaths})=> deaths),
                            label: 'Deaths',
                            borderColor: '#ff0d00',
                            backgroundColor: '#ff0d008c',
                            fill: true,
                    }]
                }}
            />) : null
    )


    const barChart = (
        confirmed ?
            (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['#ffb007', '#1bff0a', '#ff0d00'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                        
                    }}
                    options={{
                        legend: { display: false },
                        title: {display: true, text: `Current state in ${country}`}
                    }}
                />
            ) : null
    )

    return (
        <div className={styles.root}>
            <Grid container justify="center">
                <Grid item md={10} xs={11}>
                    {country ? barChart : lineChart}
                </Grid>
            </Grid>
        </div>
    )
}

export default Charts
