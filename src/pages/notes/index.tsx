import React, {useEffect} from 'react';
import NoteList from "../../components/lists/noteList/NoteList";
import {connect} from "react-redux";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";
import { Switch, Route, useLocation } from 'react-router-dom';
import Details from "./details";
import Create from "./create";

interface IProps {
    setHeaderTitle: (title: string) => void;
    setPreviousRoute: (route: string) => void;
}

const Index = (props: IProps) => {

    const { setHeaderTitle, setPreviousRoute } = props;
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/notes') {
            setPreviousRoute('');
            setHeaderTitle('Notes');
        }
    }, [setPreviousRoute, setHeaderTitle, location.pathname]);

    return (
        <Switch>
            <Route exact path="/notes" component={NoteList} />
            <Route path="/notes/create" component={Create} />
            <Route path="/notes/:id" component={Details} />
        </Switch>
    );
};

const NoteIndex = connect(
    null,
    {
        setHeaderTitle,
        setPreviousRoute
    }
)(Index);

export default NoteIndex;
