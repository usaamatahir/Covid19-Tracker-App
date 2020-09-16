import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Symptoms.module.css';


const Symptoms = () => {
    return (
        <div id="symptoms" className={styles.Symptoms}>
        <h1>Symptoms of <span>covid-19</span></h1>
        <div className={styles.root}>

            <Grid container spacing={2} justify="center">
                <Grid item sm={6} xs={12} className={styles.content} >
                    <h6>headache</h6>
                    <img src={require('./Images/headache.svg')} alt="Wash Hand" />
                </Grid>
                <Grid item sm={6} xs={12} className={styles.content}>
                    <h6>dyspnoea</h6>
                    <img src={require('./Images/breath.svg')} alt="Wash Hand" />
                </Grid>
                <Grid item sm={6} xs={12} className={styles.content}>
                    <h6>cough</h6>
                    <img src={require('./Images/cough.svg')} alt="Wash Hand" />
                </Grid>
                <Grid item sm={6} xs={12} className={styles.content}>
                    <h6>muscle pain</h6>
                    <img src={require('./Images/muscle.svg')} alt="Wash Hand" />
                </Grid>
                <Grid item sm={6} xs={12} className={styles.content}>
                    <h6>fever</h6>
                    <img src={require('./Images/fever.svg')} alt="Wash Hand" />
                </Grid>
                <Grid item sm={6} xs={12} className={styles.content}>
                    <h6>chest pain</h6>
                    <img src={require('./Images/chest-pain.svg')} alt="Wash Hand" />
                </Grid>
            
            </Grid>
            
        </div>
    </div>
    )
}

export default Symptoms;