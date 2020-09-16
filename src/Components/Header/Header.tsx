import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.head}>
            <div className={styles.headText}>
                <h4>210+ countries are effected by</h4>
                <h1>corona</h1>
                <h6>The Virus was first reported in wuhan, Hubei China on 17 November 2019, and on 11 March the world health organization (WHO) declared the outbreak a pandemic.</h6>
                <a href="./">About Covid-19 </a>
            </div>
            
            <div className={styles.headImage}>
                <div className={styles.ovalGroup1}>
                    <h2>Covid-<span>19</span></h2>
                    <a href="https://youtu.be/i0ZabxXmH4Y" className={styles.ovalGroup2} target="_blank" >       
                        <img className={styles.Image} src={require('./Images/Corona.jpg')} alt="corona" />
                    </a>
                    
                    <h4>See how to safe you</h4>
                    <a href="https://youtu.be/i0ZabxXmH4Y" className={styles.playBtn} target="_blank" >
                        <img src={require('./Images/playBtn.svg')} alt='Play' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
