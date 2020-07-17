import React from 'react';
import NavigationBar from "./NavigationBar";
import styles from "./Layout.module.css";
import Header from "./Header";
import {Helmet} from "react-helmet";

interface IProps {
    children: React.ReactNode;
}

const Layout = (props: IProps) => {

    const { children } = props;

    return (
        <>
            <Helmet>
                <title>Notes</title>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
            </Helmet>
            <Header/>
            <div className={styles.container}>
                {children}
            </div>
            <NavigationBar/>
        </>
    );
};

export default Layout;
