import React from 'react';
import styles from './NavigationBar.module.css';
import {NavLink, withRouter} from "react-router-dom";

const NavigationBar = () => {

    return (
        <div className={styles.navBar}>
            <NavLink to='/notes' className={styles.navOption} activeClassName={styles.activeOption}>
                <i className='fa fa-sticky-note-o'/>
                Notes
            </NavLink>

            <NavLink to='/todos' className={styles.navOption} activeClassName={styles.activeOption}>
                <i className='fa fa-check-square-o'/>
                Todos
            </NavLink>

            <NavLink to='/series' className={styles.navOption} activeClassName={styles.activeOption}>
                <i className='fa fa-film'/>
                Series
            </NavLink>
        </div>
    );
};

export default withRouter(NavigationBar);
