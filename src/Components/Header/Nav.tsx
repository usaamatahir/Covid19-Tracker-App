import React, { useRef } from 'react';
import styles from './Nav.module.css';


const Nav = () => {
    let display = false;
    const show = useRef(null);
    function handleNav() {

        if (display === false) {
            //@ts-ignore
            show.current.style.left = '0';
            display = true;
        }

        
    }

    const navigationDisplay = () => {
        //@ts-ignore
        show.current.style.left = '120%';
        display = false;
    }
    return (
        <div className={styles.navigation}>
            <span>
                <a href="./">
                COVID-<span className={styles.logo}>19</span>
                </a>
            </span>

            <nav>
                <ul className={styles.navList} ref={show}>
                    <li><a href="./" >Home</a></li>
                    <li><a href="#cases" onClick={navigationDisplay}>Cases</a></li>
                    <li><a href="#precautions" onClick={navigationDisplay}>Precaution</a></li>
                    <li><a href="./#symptoms" onClick={navigationDisplay}>Symptoms</a></li>
                </ul>
                <button className={styles.barIcon} onClick={handleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </nav>
        </div>
    )
}

export default Nav;