import React from 'react';
import styles from './FloatingActionButton.module.css';

interface IProps {
    onClick?: () => void;
}

const FloatingActionButton = (props: IProps) => {

    return (
        <button className={styles.fab} onClick={props.onClick}>
            <i className='fa fa-plus-circle' />
        </button>
    );
};

export default FloatingActionButton;
