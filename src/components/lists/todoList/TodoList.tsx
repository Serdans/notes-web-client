import React from 'react';
import { connect } from 'react-redux';
import {IRootState} from "../../../redux/interfaces/IRootState";
import EmptyListScreen from "../EmptyListScreen";
import FloatingActionButton from "../../FloatingActionButton";
import styles from '../ListItem.module.css';
import {Link} from "react-router-dom";
import {ITodo} from "../../../interfaces/ITodo";
import {getAllTodos} from "../../../redux/selectors/todoSelectors";
import TodoListItem from "./TodoListItem";

interface IProps {
    todos: Array<ITodo>
}

const TodoList = (props: IProps) => {

    const { todos } = props;

    const renderTodos = (): JSX.Element => {
        if (todos.length > 0) {
            return (
                <>
                    { todos.map(td => <TodoListItem key={td.id} todo={td} />) }
                    <Link to={'/todos/create'}>
                        <FloatingActionButton />
                    </Link>
                </>
            )
        }
        return (
            <EmptyListScreen
                iconClassName='fa fa-check-square-o'
                text='You have no todos yet.'
                buttonText='Add Todo'
                href='/todos/create'
            />
        );
    };

    return (
        <div className={styles.list}>
            { renderTodos() }
        </div>
    );
};


const mapStateToProps = (state: IRootState): IProps => {
    return {
        todos: getAllTodos(state)
    }
};

export default connect(
    mapStateToProps
)(TodoList);

