import React from 'react';
import styles from './Precautions.module.css';
import { Grid } from '@material-ui/core/';
  

const Precautions = () => {


    return (
        <div id="precautions" className={styles.Precaution}>
            <h1>How to safe your life?</h1>
            <div className={styles.root}>

                <Grid container spacing={2} justify="center">
                    <Grid item lg={3} md={4} sm={6} xs={12} className={styles.content} >
                        <h6>Wash your hands</h6>
                        <img src={require('./Images/handWash.svg')} alt="Wash Hand" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={styles.content}>
                        <h6>Use Mask</h6>
                        <img src={require('./Images/wearMask.svg')} alt="Wash Hand" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={styles.content}>
                        <h6>Human Contact</h6>
                        <img src={require('./Images/handShake.svg')} alt="Wash Hand" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={styles.content}>
                        <h6>Avoid gathering</h6>
                        <img src={require('./Images/gathering.svg')} alt="Wash Hand" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={styles.content}>
                        <h6>Avoid Animals</h6>
                        <img src={require('./Images/animal.svg')} alt="Wash Hand" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={styles.content}>
                        <h6>Keep Distance</h6>
                        <img src={require('./Images/distance.svg')} alt="Wash Hand" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={styles.content}>
                        <h6>Cook Well</h6>
                        <img src={require('./Images/cook.svg')} alt="Wash Hand" />
                    </Grid>
                
                </Grid>
                
            </div>
        </div>
    )
}

export default Precautions;
