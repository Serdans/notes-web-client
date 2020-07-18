import React from 'react';
import styles from './FloatingActionButton.module.css';

interface IProps {
    title?: string;
    onClick?: () => void;
}

const FloatingActionButton = (props: IProps) => {

    const { title } = props;

    return (
        <button title={title} className={styles.fab} onClick={props.onClick}>
            <i className='fa fa-plus-circle' />
        </button>
    );
};

export default FloatingActionButton;
