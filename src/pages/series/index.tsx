import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import SeriesList from "../../components/lists/seriesList/SeriesList";
import Create from "./create";
import {connect} from "react-redux";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";

interface IProps {
    setHeaderTitle: (title: string) => void;
    setPreviousRoute: (route: string) => void;
}

const Index = (props: IProps) => {

    const { setHeaderTitle, setPreviousRoute } = props;
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/series') {
            setHeaderTitle('Series');
            setPreviousRoute('');
        }
    }, [setHeaderTitle, setPreviousRoute, location.pathname]);


    return (
        <Switch>
            <Route exact path="/series" component={SeriesList} />
            <Route exact path="/series/create" component={Create} />
        </Switch>
    );
};

const SeriesIndex = connect(
    null,
    {
        setHeaderTitle,
        setPreviousRoute
    }
)(Index);

export default SeriesIndex;
