import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";
import {useLocation, withRouter, Switch, Route} from 'react-router-dom';
import TodoList from "../../components/lists/TodoList";
import Create from "./create";

interface IProps {
    setHeaderTitle: (title: string) => void;
    setPreviousRoute: (route: string) => void;
}

const Index = (props: IProps) => {

    const { setHeaderTitle, setPreviousRoute } = props;
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/todos') {
            setHeaderTitle('Todos');
            setPreviousRoute('');
        }
    }, [setHeaderTitle, setPreviousRoute, location.pathname]);

    return (
        <Switch>
            <Route exact path="/todos" component={TodoList} />
            <Route exact path="/todos/create" component={Create} />
        </Switch>
    );
};

const TodoIndex = connect(
    null,
    {
        setHeaderTitle,
        setPreviousRoute
    }
)(Index);

export default TodoIndex;
