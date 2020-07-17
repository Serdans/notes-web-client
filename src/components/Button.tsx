import React from 'react';
import styles from './Button.module.css';

interface IProps {
    theme?: 'DEFAULT' | 'DANGER'
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = (props: IProps) => {

    const { theme, children, onClick } = props;

    return (
        <button className={` ${theme === 'DANGER' && styles.danger} ${styles.button}`} onClick={onClick}>
            { children }
        </button>
    );
};

export default Button;
