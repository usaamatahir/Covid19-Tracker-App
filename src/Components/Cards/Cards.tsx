import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core/';
import Countup from 'react-countup';
import styles from './Cards.module.css';


interface CardData  {
    data: {
        confirmed: {
            detail: string,
            value: number
        },
        deaths: {
            detail: string,
            value: number
        },
        lastUpdate: string,
        recovered: {
            detail: string,
            value: number
        }
    }
}

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }: CardData) => {

    return (
        <div id="cases" className={styles.CardsSection}>
            <h1>Cases</h1>
            <hr />
            <div className={styles.Cards}>
                <Card  className={styles.CardStyling}>
                    <CardContent className={styles.Infected}>
                        <Typography><span className={styles.Title}>Infected</span></Typography>
                        <Typography><span className={styles.Data}><Countup start={0} end={confirmed.value} duration={2.5} separator=',' /></span></Typography>
                        <Typography><span className={styles.Date}>{new Date(lastUpdate).toDateString()}</span></Typography>
                        <Typography><span className={styles.Date}>Number of active Cases</span></Typography>
                    </CardContent>
                </Card>


                <Card className={styles.CardStyling}>
                    <CardContent className={styles.Recovered}>
                        <Typography><span className={styles.Title}>Recovered</span></Typography>
                        <Typography><span className={styles.Data}><Countup start={0} end={recovered.value} duration={2.5} separator=',' /></span></Typography>
                        <Typography><span className={styles.Date}>{new Date(lastUpdate).toDateString()}</span></Typography>
                        <Typography><span className={styles.Date}>Number of Recovered People</span></Typography>
                    </CardContent>
                </Card>



            <Card className={styles.CardStyling}>
                    <CardContent className={styles.Deaths}>
                        <Typography><span className={styles.Title}>Deaths</span></Typography>
                        <Typography><span className={styles.Data}><Countup start={0} end={deaths.value} duration={2.5} separator=',' /></span></Typography>
                        <Typography><span className={styles.Date}>{new Date(lastUpdate).toDateString()}</span></Typography>
                        <Typography><span className={styles.Date}>Number of Deaths</span></Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Cards;
