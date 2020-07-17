import {Reducer} from "redux";
import {ITodoAction} from "../interfaces/ITodoAction";
import {ITodo} from "../../interfaces/ITodo";
import {TodoAction} from "../enums/TodoAction";
import moment from "moment";
import generateId from "../../utils/generateId";
import produce from "immer";

const todoReducer: Reducer<Array<ITodo>, ITodoAction> = (state: Array<ITodo> | undefined, action: ITodoAction): Array<ITodo> => {

    if (!state) {
        return [];
    }

    switch (action.type) {
        case TodoAction.CREATE_TODO:
            const newTodo: ITodo = {
                id: generateId(),
                description: action.payload.description ?? '',
                done: false,
                updatedAt: moment().toISOString()
            };
            return [...state, newTodo];
        case TodoAction.DELETE_TODO:
            return state.filter((td) => td.id !== action.payload.id);
        case TodoAction.TOGGLE_TODO:
            return state.map((td) => {
                if (td.id === action.payload.id) {
                    return produce(td, draftTd => {
                        draftTd.done = !draftTd.done;
                    })
                }
                return td;
            });
        default:
            return state;
    }

};

export default todoReducer;
