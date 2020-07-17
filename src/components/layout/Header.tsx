import React, {useEffect} from 'react';
import styles from './Header.module.css';
import {IRootState} from "../../redux/interfaces/IRootState";
import {connect} from "react-redux";
import {setPreviousRoute} from "../../redux/actions/uiStateActions";
import {Link, withRouter} from "react-router-dom";

interface IMappedProps {
    headerTitle: string;
    previousRoute: string;
}

interface IProps extends IMappedProps {
    setPreviousRoute: (route: string) => void;
}

const Header = (props: IProps) => {

    const { headerTitle, previousRoute, setPreviousRoute  } = props;

    useEffect(() => {
        if (headerTitle === 'Todos' || headerTitle === 'Notes') {
            setPreviousRoute('');
        }
    }, [headerTitle]);

    const renderLeftButton = (): JSX.Element => {
        if (previousRoute) {
            return (
                <Link to={previousRoute}>
                    <button className={styles.headerButton}>
                        <i className='fa fa-arrow-left' />
                    </button>
                </Link>
            )
        }
        return (
            <button className={styles.headerButton}>
                <i className='fa fa-map-pin' />
            </button>
        );
    };

    const renderRightButton = (): JSX.Element | undefined => {
        if (!previousRoute) {
            return (
                <button className={`${styles.headerButton} ${styles.rightButton}`}>
                    <i className='fa fa-cog'/>
                </button>
            );
        }
    };

    return (
        <div className={styles.header}>
            {renderLeftButton()}

            <span className={styles.title}>
                {headerTitle}
            </span>

            {renderRightButton()}
        </div>
    );
};

const mapStateToProps = (state: IRootState): IMappedProps => {

    const { previousRoute, headerTitle } = state.uiState;

    return {
        headerTitle,
        previousRoute
    }
};

export default withRouter(connect(
    mapStateToProps,
    {
        setPreviousRoute,
    }
)(Header));
