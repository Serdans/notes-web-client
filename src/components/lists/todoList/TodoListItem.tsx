import React from 'react';
import styles from '../ListItem.module.css';
import todoStyles from './TodoListItem.module.css';
import {ITodo} from "../../../interfaces/ITodo";
import moment from "moment";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../../../redux/actions/todoActions";

interface IProps {
    todo: ITodo;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoListItem = (props: IProps) => {

    const {todo, toggleTodo, deleteTodo} = props;

    return (
        <div className={styles.listItem} onClick={() => toggleTodo(todo.id)}>
            <h4 className={`${todo.done && todoStyles.done} ${styles.leftContainer}`}>{todo.description}</h4>
            <span className={styles.rightContainer}>
                <input checked={todo.done || false} type='checkbox' onChange={() => toggleTodo(todo.id)}/>
                {moment(todo.updatedAt).format('DD/MM hh:mm')}
                <i className={`fa fa-trash-o ${todoStyles.delete}`} onClick={() => deleteTodo(todo.id)} />
            </span>
        </div>
    );
};

export default connect(
    null,
    {
        toggleTodo,
        deleteTodo
    }
)(TodoListItem);
