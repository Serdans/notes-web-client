import React, {useEffect} from 'react';
import styles from './Header.module.css';
import {IRootState} from "../../redux/interfaces/IRootState";
import {connect} from "react-redux";
import {setPinnedHomeRoute, setPreviousRoute} from "../../redux/actions/uiStateActions";
import {Link, withRouter, useLocation} from "react-router-dom";

interface IMappedProps {
    headerTitle: string;
    previousRoute: string;
    pinnedHomeRoute: string;
}

interface IProps extends IMappedProps {
    setPreviousRoute: (route: string) => void;
    setPinnedHomeRoute: (route: string) => void;
}

const Header = (props: IProps) => {

    const { headerTitle, previousRoute, setPreviousRoute, pinnedHomeRoute, setPinnedHomeRoute } = props;

    const location = useLocation();

    useEffect(() => {
        if (headerTitle === 'Todos' || headerTitle === 'Notes') {
            setPreviousRoute('');
        }
    }, [setPreviousRoute, headerTitle]);

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
            <button
                title={'Pin Page'}
                className={`${styles.headerButton} ${pinnedHomeRoute === location.pathname ? styles.activePin : styles.pin}`}
                onClick={() => setPinnedHomeRoute(location.pathname)}
            >
                <i className='fa fa-map-pin' />
            </button>
        );
    };

    const renderRightButton = (): JSX.Element | undefined => {
        if (!previousRoute) {
            return (
                <button title={'Settings'} className={`${styles.headerButton} ${styles.rightButton} ${styles.regularHeaderButton}`}>
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
        previousRoute,
        pinnedHomeRoute: state.uiState.pinnedHomeRoute
    }
};

export default withRouter(connect(
    mapStateToProps,
    {
        setPreviousRoute,
        setPinnedHomeRoute
    }
)(Header));
