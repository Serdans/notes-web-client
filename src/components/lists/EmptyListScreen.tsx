import React from 'react';
import styles from './EmptyListScreen.module.css';
import {Link} from "react-router-dom";

interface IProps {
    iconClassName: string;
    text: string;
    buttonText: string;
    href: string;
}

const EmptyListScreen = (props: IProps) => {

    const { iconClassName, text, buttonText, href } = props;

    return (
        <div className={styles.screen}>
            <span className={styles.iconContainer}>
                <i className={`${iconClassName}`} />
                <p>{ text }</p>
                <Link to={href}>
                    <button className={styles.actionButton}>
                        { buttonText }
                    </button>
                </Link>

            </span>
        </div>
    );
};

export default EmptyListScreen;
