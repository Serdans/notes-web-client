import {ITodoAction} from "../interfaces/ITodoAction";
import {TodoAction} from "../enums/TodoAction";
import moment from "moment";
import generateId from "../../utils/generateId";

export const createTodo = (description: string): ITodoAction => ({
    type: TodoAction.CREATE_TODO,
    payload: {
        id: generateId(),
        description,
        done: false,
        updatedAt: moment().toISOString()
    }
});

export const toggleTodo = (id: string): ITodoAction => ({
    type: TodoAction.TOGGLE_TODO,
    payload: {
        id
    }
});

export const deleteTodo = (id: string): ITodoAction => ({
    type: TodoAction.DELETE_TODO,
    payload: {
        id
    }
});
